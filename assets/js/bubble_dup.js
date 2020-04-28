var Bubbles, root, texts;

root = typeof exports !== "undefined" && exports !== null ? exports : this;

Bubbles = function () {
  // console.log("Width: ", w);
  var chart,
    clear,
    click,
    collide,
    collisionPadding,
    connectEvents,
    data,
    force,
    gravity,
    hashchange,
    height,
    idValue,
    jitter,
    label,
    margin,
    maxRadius,
    minCollisionRadius,
    mouseout,
    mouseover,
    node,
    rScale,
    rValue,
    textValue,
    tick,
    transformData,
    update,
    updateActive,
    updateLabels,
    updateNodes,
    width;

  var calculated_width, calculated_height;
  if (window.innerWidth >= 1024) {
    calculated_width = window.innerWidth / 1.05;
    calculated_height = window.innerHeight / 2 - 75;
    maxRadius = window.innerWidth / 30;
  } else {
    calculated_width = window.innerWidth;
    calculated_height = window.innerHeight - 200;
    maxRadius = window.innerWidth / 10;
  }
  width = calculated_width;
  height = calculated_height;
  data = [];
  node = null;
  label = null;
  margin = {
    top: 0,
    right: 10,
    bottom: 10,
    left: 10,
  };
  rScale = d3.scale.sqrt().range([0, maxRadius]);
  rValue = function (d) {
    return parseInt(d.count);
  };
  idValue = function (d) {
    return d.name;
  };
  textValue = function (d) {
    return d.name;
  };
  collisionPadding = 3;
  minCollisionRadius = 2;
  jitter = 0.1;
  transformData = function (rawData) {
    rawData.forEach(function (d) {
      d.count = parseInt(d.count);
      return rawData.sort(function () {
        return 0.5 - Math.random();
      });
    });
    return rawData;
  };
  tick = function (e) {
    var dampenedAlpha;
    dampenedAlpha = e.alpha * 0.1;
    node
      .each(gravity(dampenedAlpha))
      .each(collide(jitter))
      .attr("transform", function (d) {
        return "translate(" + d.x + "," + d.y + ")";
      });
    return label
      .style("left", function (d) {
        return margin.left + d.x - d.dx / 2 + "px";
      })
      .style("top", function (d) {
        return margin.top + d.y - d.dy / 2 + "px";
      });
  };
  force = d3.layout
    .force()
    .gravity(0)
    .charge(0)
    .size([width, height])
    .on("tick", tick);
  chart = function (selection) {
    return selection.each(function (rawData) {
      var maxDomainValue, svg, svgEnter;
      data = transformData(rawData);
      maxDomainValue = d3.max(data, function (d) {
        return rValue(d);
      });
      rScale.domain([0, maxDomainValue]);
      svg = d3.select(this).selectAll("svg").data([data]);
      svgEnter = svg.enter().append("svg");
      svg.attr("width", width + margin.left + margin.right);
      svg.attr("height", height + margin.top + margin.bottom);
      node = svgEnter
        .append("g")
        .attr("id", "bubble-nodes")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      node
        .append("rect")
        .attr("id", "bubble-background")
        .attr("width", width)
        .attr("height", height)
        .on("click", clear);
      label = d3
        .select(this)
        .selectAll("#bubble-labels")
        .data([data])
        .enter()
        .append("div")
        .attr("id", "bubble-labels");
      update();
      hashchange();
      return d3.select(window).on("hashchange", hashchange);
    });
  };
  update = function () {
    data.forEach(function (d, i) {
      return (d.forceR = Math.max(minCollisionRadius, rScale(rValue(d))));
    });
    force.nodes(data).start();
    updateNodes();
    return updateLabels();
  };
  updateNodes = function () {
    node = node.selectAll(".bubble-node").data(data, function (d) {
      return idValue(d);
    });
    node.exit().remove();
    return node
      .enter()
      .append("a")
      .attr("class", "bubble-node")
      .attr("xlink:href", function (d) {
        return "#" + encodeURIComponent(idValue(d));
      })
      .attr("fill", function (d) {
        console.log(d.avg_rating);
        if (d.avg_rating >= 3.5) {
          return "#b2df8a";
        } else {
          return "#fb9a99";
        }
      })
      .attr("opacity", 0.75)
      .call(force.drag)
      .call(connectEvents)
      .append("circle")
      .attr("r", function (d) {
        return rScale(rValue(d));
      });
  };
  updateLabels = function () {
    var labelEnter;
    label = label.selectAll(".bubble-label").data(data, function (d) {
      return idValue(d);
    });
    label.exit().remove();
    labelEnter = label
      .enter()
      .append("a")
      .attr("class", "bubble-label")
      .attr("href", function (d) {
        return "#" + encodeURIComponent(idValue(d));
      })
      .call(force.drag)
      .call(connectEvents);
    labelEnter
      .append("div")
      .attr("class", "bubble-label-name")
      .text(function (d) {
        return textValue(d);
      });
    labelEnter
      .append("div")
      .attr("class", "bubble-label-value")
      .text(function (d) {
        return rValue(d);
      });
    label
      .style("font-size", function (d) {
        return Math.max(6, rScale(rValue(d) / 2)) + "px";
      })
      .style("width", function (d) {
        return 2.5 * rScale(rValue(d)) + "px";
      });
    label
      .append("span")
      .text(function (d) {
        return textValue(d);
      })
      .each(function (d) {
        return (d.dx = Math.max(
          2.5 * rScale(rValue(d)),
          this.getBoundingClientRect().width
        ));
      })
      .remove();
    label.style("width", function (d) {
      return d.dx + "px";
    });
    return label.each(function (d) {
      return (d.dy = this.getBoundingClientRect().height);
    });
  };
  gravity = function (alpha) {
    var ax, ay, cx, cy;
    cx = width / 2;
    cy = height / 2;
    ax = alpha / 8;
    ay = alpha;
    return function (d) {
      d.x += (cx - d.x) * ax;
      return (d.y += (cy - d.y) * ay);
    };
  };
  collide = function (jitter) {
    return function (d) {
      return data.forEach(function (d2) {
        var distance, minDistance, moveX, moveY, x, y;
        if (d !== d2) {
          x = d.x - d2.x;
          y = d.y - d2.y;
          distance = Math.sqrt(x * x + y * y);
          minDistance = d.forceR + d2.forceR + collisionPadding;
          if (distance < minDistance) {
            distance = ((distance - minDistance) / distance) * jitter;
            moveX = x * distance;
            moveY = y * distance;
            d.x -= moveX;
            d.y -= moveY;
            d2.x += moveX;
            return (d2.y += moveY);
          }
        }
      });
    };
  };
  connectEvents = function (d) {
    d.on("click", click);
    d.on("mouseover", mouseover);
    return d.on("mouseout", mouseout);
  };
  clear = function () {
    return location.replace("#");
  };
  click = function (d) {
    location.replace("#" + encodeURIComponent(idValue(d)));
    return d3.event.preventDefault();
  };
  hashchange = function () {
    var id;
    id = decodeURIComponent(location.hash.substring(1)).trim();
    return updateActive(id);
  };
  updateActive = function (id) {
    node.classed("bubble-selected", function (d) {
      return id === idValue(d);
    });
    if (id.length > 0) {
      // console.log("Selected Word: " + id);
      d3.select("#selected_food").html("#" + id + "</h5>");

      update_recommend(id);
      return;
    } else {
      return d3.select("#selected_food").html("");
    }
  };
  mouseover = function (d) {
    return node.classed("bubble-hover", function (p) {
      return p === d;
    });
  };
  mouseout = function (d) {
    return node.classed("bubble-hover", false);
  };
  chart.jitter = function (_) {
    if (!arguments.length) {
      return jitter;
    }
    jitter = _;
    force.start();
    return chart;
  };
  chart.height = function (_) {
    if (!arguments.length) {
      return height;
    }
    height = _;
    return chart;
  };
  chart.width = function (_) {
    if (!arguments.length) {
      return width;
    }
    width = _;
    return chart;
  };
  chart.r = function (_) {
    if (!arguments.length) {
      return rValue;
    }
    rValue = _;
    return chart;
  };
  return chart;
};

root.plotData = function (selector, data, plot) {
  return d3.select(selector).datum(data).call(plot);
};

texts = [
  {
    key: "sherlock",
    file: "top_sherlock.csv",
    name: "The Adventures of Sherlock Holmes",
  },
  {
    key: "aesop",
    file: "top_aesop.csv",
    name: "Aesop's Fables",
  },
  {
    key: "alice",
    file: "alice.csv",
    name: "Alice's Adventures in Wonderland",
  },
  {
    key: "gulliver",
    file: "top_gulliver.csv",
    name: "Gulliver's Travels",
  },
];

var pre_star_list;

function update_recommend(food) {
  // Clear Canvas
  document.getElementById("checkin_canvas").innerHTML = "";

  // Clear Timing
  document.getElementsByClassName("monday")[0].innerHTML = "";
  document.getElementsByClassName("tuesday")[0].innerHTML = "";
  document.getElementsByClassName("wednesday")[0].innerHTML = "";
  document.getElementsByClassName("thursday")[0].innerHTML = "";
  document.getElementsByClassName("friday")[0].innerHTML = "";
  document.getElementsByClassName("saturday")[0].innerHTML = "";
  document.getElementsByClassName("sunday")[0].innerHTML = "";

  if (food.length) {
    document.getElementsByClassName("food_details")[0].style.display = "block";
  }

  var state = document.getElementById("selected_state").innerText;
  console.log(state, food);
}
