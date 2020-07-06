import React from 'react';
import * as d3 from "d3";
import {Fragment} from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';
import axios from 'axios';


class Canvas extends React.Component{

  handleChange = event => {
    this.setState({ filename: event.target.value });
  }

  handleDesc = event=>{
    this.setState({descrip:event.target.value});
  }

  handleSubmit = event => {

    event.preventDefault();
    const title=event.target.elements.filename.value;
    const content = event.target.elements.descrip.value;
    var nodestr = JSON.stringify(this.nodes);
    var thisGraph=this;
    var saveEdges = [];
      thisGraph.edges.forEach(function(val, i){
        saveEdges.push({source: val.source.id, target: val.target.id, id:val.id});
    });

    var modelstr = JSON.stringify({"nodes": thisGraph.nodes, "edges": saveEdges, "idct_node": thisGraph.idct_node, "idct_edge":thisGraph.idct_edge})//], {type: "text/plain;charset=utf-8"});


    notification.open({
      message: 'Notification Title',
      description: this.state.filename ,
      onClick: () => {
        console.log('Notification Clicked!');
        console.log()
        },
    });

    axios.post('http://127.0.0.1:8000/api/',{
      title:title,
      content:content,
      model:modelstr

    }).then(res => {
        console.log(res);
    })


    //console.log('Time to load model');
    thisGraph.loadNewGraph(title, content, modelstr);
    //console.log('Loaded graph');

  }
  loadNewGraph(filename_in,descrip_in, modelstr){

    var modeldict = JSON.parse(modelstr);

    var nodes_in = modeldict["nodes"],
        edges_in = modeldict["edges"],
        idct_node_in = modeldict["idct_node"],
        idct_edge_in = modeldict["idct_edge"];


    var thisGraph = this;

    thisGraph.setState({filename:filename_in, descrip: descrip_in});

    edges_in.forEach(function(e, i){
        edges_in[i] = {
          source: thisGraph.nodes.filter(function(n){return n.id == e.source;})[0],
          target: thisGraph.nodes.filter(function(n){return n.id == e.target;})[0],
          id: e.id
        };
    });

    thisGraph.idct_node = idct_node_in;
    thisGraph.idct_edge = idct_edge_in;

    thisGraph.nodes = nodes_in;
    thisGraph.edges = edges_in;
    thisGraph.updateGraph();
    //console.log(thisGraph.nodes);
    //console.log(thisGraph.edges);


  };


  componentDidMount() {
    //var docEl = document.documentElement,
    //    bodyEl = d3.select(this.refs.myCanvas).node()

    //var width = window.innerWidth || docEl.clientWidth || bodyEl.clientWidth,
    //    height =  window.innerHeight|| docEl.clientHeight|| bodyEl.clientHeight;

    var thisGraph = this;
    var element = d3.select(this.refs.myCanvas).node();
    var width = element.getBoundingClientRect().width;
    var height = element.getBoundingClientRect().height;


    var svg = d3.select(this.refs.myCanvas).append("svg").attr("width",width).attr("height", height);
    var defs = svg.append('svg:defs');
    defs.append('svg:marker')
      .attr('id', 'end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', "32")
      .attr('markerWidth', 3.5)
      .attr('markerHeight', 3.5)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5');

    // define arrow markers for leading arrow
    defs.append('svg:marker')
      .attr('id', 'mark-end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 7)
      .attr('markerWidth', 3.5)
      .attr('markerHeight', 3.5)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5');


    thisGraph.svg = svg;
    thisGraph.svgG = svg.append("g").classed(thisGraph.consts.graphClass, true);
    var svgG = thisGraph.svgG;

    // displayed when dragging between nodes
    thisGraph.dragLine = svgG.append('svg:path')
          .attr('class', 'link dragline hidden')
          .attr('d', 'M0,0L0,0')
          .style('marker-end', 'url(#mark-end-arrow)');

    // svg nodes and edges
    thisGraph.paths = svgG.append("g").selectAll("g");
    thisGraph.circles = svgG.append("g").selectAll("g");

    thisGraph.drag = d3.behavior.drag()
          .origin(function(d){
            return {x: d.x, y: d.y};
          })
          .on("drag", function(args){
            thisGraph.state.justDragged = true;
            thisGraph.dragmove.call(thisGraph, args);
          })
          .on("dragend", function() {
            // todo check if edge-mode is selected
          });



    d3.select(window).on("keydown", this.svgKeyDown)
    .on("keyup", this.svgKeyUp);
    svg.on("mousedown", this.svgMouseDown);
    svg.on("mouseup", this.svgMouseUp);

    var dragSvg = d3.behavior.zoom()
          .on("zoom", function(){
            if (d3.event.sourceEvent.shiftKey){
              // TODO  the internal d3 state is still changing
              return false;
            } else{
              thisGraph.state.justScaleTransGraph = true;
              d3.select("." + thisGraph.consts.graphClass)
              .attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")");
            }
            return true;
          })
          .on("zoomstart", function(){
            var ael = d3.select("#" + thisGraph.consts.activeEditId).node();
            if (ael){
              ael.blur();
            }
            if (!d3.event.sourceEvent.shiftKey) d3.select('body').style("cursor", "move");
          })
          .on("zoomend", function(){
            d3.select('body').style("cursor", "auto");
          });

    svg.call(dragSvg).on("dblclick.zoom", null);
    // listen for resize

    window.onresize = this.updateWindow;



    //Do svg stuff
  }
  constructor(props){
    super(props);
    this.consts =  {
      selectedClass: "selected",
      connectClass: "connect-node",
      circleGClass: "conceptG",
      graphClass: "graph",
      activeEditId: "active-editing",
      BACKSPACE_KEY: 8,
      DELETE_KEY: 46,
      ENTER_KEY: 13,
      nodeRadius: 50,
      defaultTitle:'New Node'
    };
    this.idct_node = 1;
    this.idct_edge = 1;
    this.nodes = [];
    this.edges = [];
    this.state = {
      filename: '',
      descrip: '',
      selectedNode: null,
      selectedEdge: null,
      mouseDownNode: null,
      mouseDownLink: null,
      justDragged: false,
      justScaleTransGraph: false,
      lastKeyDown: -1,
      shiftNodeDrag: false,
      selectedText: null,
      showNodeEditor: false,
      showEdgeEditor: false,
    };
    this.dragLine = null;
    this.paths=null;
    this.circles=null;
    this.drag=null;

    this.sayHello = this.sayHello.bind(this);
    this.svgKeyDown =  this.svgKeyDown.bind(this);
    this.svgKeyUp =  this.svgKeyUp.bind(this);
    this.svgMouseDown = this.svgMouseDown.bind(this);
    this.svgMouseUp = this.svgMouseUp.bind(this);
    this.updateGraph = this.updateGraph.bind(this);
    this.updateWindow = this.updateWindow.bind(this);
    this.insertTitleLinebreaks = this.insertTitleLinebreaks.bind(this);
    this.changeTextOfNode = this.changeTextOfNode.bind(this);
    this.dragmove = this.dragmove.bind(this);
    this.replaceSelectNode = this.replaceSelectNode.bind(this);
    this.removeSelectFromNode = this.removeSelectFromNode.bind(this);
    this.spliceLinksForNode = this.spliceLinksForNode.bind(this);
    this.pathMouseDown = this.pathMouseDown.bind(this);
    this.removeSelectFromEdge = this.removeSelectFromEdge.bind(this);
    this.replaceSelectEdge = this.replaceSelectEdge.bind(this);
    this.circleMouseDown = this.circleMouseDown.bind(this);
    this.circleMouseUp = this.circleMouseUp.bind(this);
    this.selectElementContents = this.selectElementContents.bind(this);

  };



  spliceLinksForNode(node){
    var thisGraph = this,
        toSplice = thisGraph.edges.filter(function(l) {
      return (l.source === node || l.target === node);
    });
    toSplice.map(function(l) {
      thisGraph.edges.splice(thisGraph.edges.indexOf(l), 1);
    });
  };
  pathMouseDown(d3path, d){
    var thisGraph = this,
        state = thisGraph.state;
    d3.event.stopPropagation();
    state.mouseDownLink = d;

    if (state.selectedNode){
      thisGraph.removeSelectFromNode();
    }

    var prevEdge = state.selectedEdge;
    if (!prevEdge || prevEdge !== d){
      thisGraph.replaceSelectEdge(d3path, d);
    } else{
      thisGraph.removeSelectFromEdge();
    }
  };

  removeSelectFromEdge(){
    var thisGraph = this;
    thisGraph.paths.filter(function(cd){
      return cd === thisGraph.state.selectedEdge;
    }).classed(thisGraph.consts.selectedClass, false);
    thisGraph.state.selectedEdge = null;
    thisGraph.setState({showEdgeEditor:false});
  };

  replaceSelectEdge(d3Path, edgeData){
  	//Runs when an edge is selected
  	console.log(edgeData);
    var thisGraph = this;
    d3Path.classed(thisGraph.consts.selectedClass, true);
    if (thisGraph.state.selectedEdge){
      thisGraph.removeSelectFromEdge();
    }
    thisGraph.state.selectedEdge = edgeData;
    thisGraph.setState({showEdgeEditor:true});
  };
  replaceSelectNode(d3Node, nodeData){
    var thisGraph = this;
    d3Node.classed(this.consts.selectedClass, true);
    if (thisGraph.state.selectedNode){
      thisGraph.removeSelectFromNode();
    }
    thisGraph.state.selectedNode = nodeData;
    thisGraph.setState({showNodeEditor:true});
  };
  removeSelectFromNode(){
    var thisGraph = this;
    thisGraph.circles.filter(function(cd){
      return cd.id === thisGraph.state.selectedNode.id;
    }).classed(thisGraph.consts.selectedClass, false);
    thisGraph.state.selectedNode = null;
    thisGraph.setState({showNodeEditor:false});
  };

  sayHello(){
    console.log(this.paths);

  }
  svgKeyDown(){
    var thisGraph = this,
        state = thisGraph.state,
        consts = thisGraph.consts;
    // make sure repeated key presses don't register for each keydown
    if(state.lastKeyDown !== -1) return;

    state.lastKeyDown = d3.event.keyCode;
    var selectedNode = state.selectedNode,
        selectedEdge = state.selectedEdge;

    switch(d3.event.keyCode) {
    case consts.BACKSPACE_KEY:
    case consts.DELETE_KEY:

      if (selectedNode){
        thisGraph.nodes.splice(thisGraph.nodes.indexOf(selectedNode), 1);
        thisGraph.spliceLinksForNode(selectedNode);
        state.selectedNode = null;
        thisGraph.updateGraph();
      } else if (selectedEdge){
        thisGraph.edges.splice(thisGraph.edges.indexOf(selectedEdge), 1);
        state.selectedEdge = null;
        thisGraph.updateGraph();
      }
      break;
    }
  }
  svgKeyUp(){
    this.setState({lastKeyDown:-1});
    //this.state.lastKeyDown = -1;
  }
  svgMouseDown(){
    this.setState({graphMouseDown:true});
    //this.state.graphMouseDown = true;
  };

  svgMouseUp(){
    var thisGraph = this,
        state = thisGraph.state;
    if (state.justScaleTransGraph) {
      // dragged not clicked
      state.justScaleTransGraph = false;
    } else if (state.graphMouseDown && d3.event.shiftKey){
      // clicked not dragged from svg
      var xycoords = d3.mouse(thisGraph.svgG.node()),
          d = {id: thisGraph.idct_node++, title: thisGraph.consts.defaultTitle, x: xycoords[0], y: xycoords[1]};
      thisGraph.nodes.push(d);
      thisGraph.updateGraph();
      // make title of text immediently editable
      var d3txt = thisGraph.changeTextOfNode(thisGraph.circles.filter(function(dval){
        return dval.id === d.id;
      }), d),
          txtNode = d3txt.node();
      thisGraph.selectElementContents(txtNode);
      txtNode.focus();
    } else if (state.shiftNodeDrag){
      // dragged from node
      state.shiftNodeDrag = false;
      thisGraph.dragLine.classed("hidden", true);
    }
    state.graphMouseDown = false;
  };

  updateGraph(){
    var thisGraph = this,
        consts = thisGraph.consts,
        state = thisGraph.state;

    thisGraph.paths = thisGraph.paths.data(thisGraph.edges, function(d){
      return String(d.source.id) + "+" + String(d.target.id);
    });
    var paths = thisGraph.paths;
    // update existing paths
    paths.style('marker-end', 'url(#end-arrow)')
      .classed(consts.selectedClass, function(d){
        return d === state.selectedEdge;
      })
      .attr("d", function(d){
        return "M" + d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y;
      });

    // add new paths
    paths.enter()
      .append("path")
      .style('marker-end','url(#end-arrow)')
      .classed("link", true)
      .attr("d", function(d){
        return "M" + d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y;
      })
      .on("mousedown", function(d){
        thisGraph.pathMouseDown(d3.select(this), d);
        }
      )
      .on("mouseup", function(d){
        state.mouseDownLink = null;
      });

    // remove old links
    paths.exit().remove();

    // update existing nodes
    thisGraph.circles = thisGraph.circles.data(thisGraph.nodes, function(d){ return d.id;});
    thisGraph.circles.attr("transform", function(d){return "translate(" + d.x + "," + d.y + ")";});
    // add new nodes
    var newGs= thisGraph.circles.enter()
          .append("g");

    newGs.classed(consts.circleGClass, true)
      .attr("transform", function(d){return "translate(" + d.x + "," + d.y + ")";})
      .on("mouseover", function(d){
        if (state.shiftNodeDrag){
          d3.select(this).classed(consts.connectClass, true);
        }
      })
      .on("mouseout", function(d){
        d3.select(this).classed(consts.connectClass, false);
      })
      .on("mousedown", function(d){
        thisGraph.circleMouseDown(d3.select(this), d);
      })
      .on("mouseup", function(d){
        thisGraph.circleMouseUp(d3.select(this), d);
      })
      .call(thisGraph.drag);

    newGs.append("circle")
      .attr("r", String(consts.nodeRadius));

    newGs.each(function(d){
      thisGraph.insertTitleLinebreaks(d3.select(this), d.title);
    });

    // remove old nodes
    thisGraph.circles.exit().remove();

  };

  circleMouseDown(d3node,d){
    var thisGraph = this,
        state = thisGraph.state;
    d3.event.stopPropagation();
    state.mouseDownNode = d;
    if (d3.event.shiftKey){
      state.shiftNodeDrag = d3.event.shiftKey;
      // reposition dragged directed edge
      thisGraph.dragLine.classed('hidden', false)
        .attr('d', 'M' + d.x + ',' + d.y + 'L' + d.x + ',' + d.y);
      return;
    }
  }
  circleMouseUp(d3node,d){
    var thisGraph = this,
        state = thisGraph.state,
        consts = thisGraph.consts;
    // reset the states
    state.shiftNodeDrag = false;
    d3node.classed(consts.connectClass, false);

    var mouseDownNode = state.mouseDownNode;

    if (!mouseDownNode) return;

    thisGraph.dragLine.classed("hidden", true);

    if (mouseDownNode !== d){
      // we're in a different node: create new edge for mousedown edge and add to graph
      var newEdge = {source: mouseDownNode, target: d, value:'Default Value', id:this.idct_edge++};

      var filtRes = thisGraph.paths.filter(function(d){
        if (d.source === newEdge.target && d.target === newEdge.source){
          thisGraph.edges.splice(thisGraph.edges.indexOf(d), 1);
        }
        return d.source === newEdge.source && d.target === newEdge.target;
      });



      if (!filtRes[0].length){
        thisGraph.edges.push(newEdge);
        console.log('New Edge')
        thisGraph.updateGraph();
      }
    } else{
      // we're in the same node
      if (state.justDragged) {
        // dragged, not clicked
        state.justDragged = false;
      } else{
        // clicked, not dragged
        if (d3.event.shiftKey){
          // shift-clicked node: edit text content
          // The text-changing function is called
          var d3txt = thisGraph.changeTextOfNode(d3node, d);
          var txtNode = d3txt.node();
          thisGraph.selectElementContents(txtNode);
          txtNode.focus();
        } else{
          if (state.selectedEdge){
            thisGraph.removeSelectFromEdge();
          }
          var prevNode = state.selectedNode;

          if (!prevNode || prevNode.id !== d.id){
            thisGraph.replaceSelectNode(d3node, d);
          } else{
            thisGraph.removeSelectFromNode();
          }
        }
      }
    }
    state.mouseDownNode = null;
    return;
  }
  dragmove(d) {
    var thisGraph = this;
    if (thisGraph.state.shiftNodeDrag){
      thisGraph.dragLine.attr('d', 'M' + d.x + ',' + d.y + 'L' + d3.mouse(thisGraph.svgG.node())[0] + ',' + d3.mouse(this.svgG.node())[1]);
    } else{
      d.x += d3.event.dx;
      d.y +=  d3.event.dy;
      thisGraph.updateGraph();
    }
  };
  updateWindow(){
    //var docEl = document.documentElement,
    //    bodyEl = document.getElementsByTagName('body')[0];
    //var x = window.innerWidth || docEl.clientWidth || bodyEl.clientWidth;
    //var y = window.innerHeight|| docEl.clientHeight|| bodyEl.clientHeight;
    var element = d3.select(this.refs.myCanvas).node();
    var x = element.getBoundingClientRect().width;
    var y = element.getBoundingClientRect().height;
    this.svg.attr("width",x).attr("height", y);

  }

  insertTitleLinebreaks(gEl, title){
    var words = title.split(/\s+/g),
        nwords = words.length;
    var el = gEl.append("text")
          .attr("text-anchor","middle")
          .attr("dy", "-" + (nwords-1)*7.5);

    for (var i = 0; i < words.length; i++) {
      var tspan = el.append('tspan').text(words[i]);
      if (i > 0)
        tspan.attr('x', 0).attr('dy', '15');
    }

  };

  selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  };



  changeTextOfNode(d3node, d){

    var thisGraph = this;
    var consts = this.consts,
        htmlEl = d3node.node();

    var canvas_rect = d3.select(this.refs.myCanvas).node().getBoundingClientRect();


    d3node.selectAll("text").remove();
    var nodeBCR = htmlEl.getBoundingClientRect(),
        curScale = nodeBCR.width/consts.nodeRadius,
        placePad  =  5*curScale,
        useHW = curScale > 1 ? nodeBCR.width*0.71 : consts.nodeRadius*1.42;



    // replace with editableconent text
    var d3txt = this.svg.selectAll("foreignObject")
          .data([d])
          .enter()
          .append("foreignObject")
          .attr("x", nodeBCR.left + placePad - canvas_rect.left*0.99)
          .attr("y", nodeBCR.top + placePad - canvas_rect.top*0.93)
          .attr("height", 2*useHW)
          .attr("width", useHW)
          .append("xhtml:p")
          .attr("id", consts.activeEditId)
          .attr("contentEditable", "true")
          .text(d.title)
          .on("mousedown", function(d){
            d3.event.stopPropagation();
          })
          .on("keydown", function(d){
            d3.event.stopPropagation();
            if (d3.event.keyCode == consts.ENTER_KEY && !d3.event.shiftKey){
              this.blur();
            }
          })
          .on("blur", function(d){
            d.title = this.textContent;
            thisGraph.insertTitleLinebreaks(d3node, d.title);
            d3.select(this.parentElement).remove();
          });
    return d3txt;
  };

    render(){
      return(
        <Fragment>
        <div id="graph"  ref='myCanvas'/>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div id="toolbox">


        <form onSubmit={this.handleSubmit}>
          <label>

            <input type="text" name="filename" value = {this.state.filename} onChange={this.handleChange} size='small' placeholder="Name your file here"/>
            <input type='text' name ="descrip" value={this.state.descrip} placeholder="describe your model here" name="descrip" onChange={this.handleDesc} />
          </label>
          <button type="submit">Add this model</button>
        </form>
        {this.state.selectedNode &&
        	<h2> You selected a node </h2>
        }
        {this.state.selectedEdge &&
        	<h2> You selected an edge </h2>
        }
        </div>



        </Fragment>

      )
    }

}

export default Canvas;
