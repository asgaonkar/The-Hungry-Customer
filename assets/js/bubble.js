var Bubbles, root, texts;

root = typeof exports !== "undefined" && exports !== null ? exports : this;

Bubbles = function () {
  // console.log("Width: ", w);
  bubble_total = 0;
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
    calculated_width = window.innerWidth / 2;
    calculated_height = window.innerHeight / 2 - 100;
    maxRadius = window.innerWidth / 35;
  } else {
    calculated_width = window.innerWidth;
    calculated_height = window.innerHeight - 200;
    maxRadius = window.innerWidth / 20;
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
  minCollisionRadius = 3;
  jitter = 0.075;
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
        // console.log(d.avg_rating);
        if (d.avg_rating >= 4.5) {
          return "#52A136";
        }
        // 3.5 and above
        else if (d.avg_rating >= 4) {
          return "#6BBD57";
        }
        // 3.5 and above
        else if (d.avg_rating >= 3.5) {
          return "#9DD76A";
        }
        // 3.5 and below
        else {
          return "#DCF9C6";
        }
      })
      .attr("opacity", function (d) {
        if (d.avg_rating >= 4.5) {
          return 0.75;
        }
        // 3.5 and above
        else if (d.avg_rating >= 4) {
          return 0.5;
        }
        // 3.5 and above
        else if (d.avg_rating >= 3.5) {
          return 0.45;
        }
        // 3.5 and below
        else {
          return 0.4;
        }
      })
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
        // return rValue(d);
        // console.log((d.avg_rating * d.count).toFixed(0));
        bubble_total += parseInt((d.avg_rating * d.count).toFixed(0));
        // console.log(bubble_total);
        return (d.avg_rating * d.count).toFixed(0);
      });
    label
      .style("font-size", function (d) {
        // console.log(d, rScale(rValue(d) / 2));
        return Math.max(8, rScale(rValue(d) / 2.5)) + "px";
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
      d3.select("#selected_food").html("#" + id + "</h4>");

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
  document.getElementById("display_rest").style.display = "none";

  // Clear Canvas
  document.getElementById("checkin_canvas").innerHTML = "";
  document.getElementById("trial_cards").style.display = "block";
  document.getElementById("selected_food_helper").style.display = "block";
  document.getElementById("table").style.display = "none";
  document.getElementById("restaurant_details").style.display = "none";

  // Clear Timing
  document.getElementsByClassName("monday")[0].innerHTML = "";
  document.getElementsByClassName("tuesday")[0].innerHTML = "";
  document.getElementsByClassName("wednesday")[0].innerHTML = "";
  document.getElementsByClassName("thursday")[0].innerHTML = "";
  document.getElementsByClassName("friday")[0].innerHTML = "";
  document.getElementsByClassName("saturday")[0].innerHTML = "";
  document.getElementsByClassName("sunday")[0].innerHTML = "";

  if (food.length) {
    document.getElementsByClassName("card_container")[0].style.display =
      "block";
    document.getElementsByClassName("food_details")[0].style.display = "block";
  }

  var state = document.getElementById("selected_state").innerText;
  // console.log(state, food);

  var card_holder = document.getElementsByClassName("rest_recommend")[0];
  var card_template = document.getElementsByClassName("card_container")[0]
    .outerHTML;

  card_holder.innerHTML = "<br />";
  card_holder.innerHTML += card_template;
  card_holder.innerHTML += "<br />";

  if (food.length) {
    for (var i = 1; i < Object.keys(recommend[state][food]).length; i++) {
      card_holder.innerHTML += card_template;
      card_holder.innerHTML += "<br />";
    }
  }
  var current_business,
    categories,
    tags = "";

  var full_star =
    '<li class="list-inline-item mr-0"><i class="fa fa-star amber-text"></i></li>';
  var half_star =
    '<li class="list-inline-item mr-0"><i class="fa fa-star-half amber-text"></i></li>';

  for (var i = 0; i < Object.keys(recommend[state][food]).length; i++) {
    // console.log(i + 1);
    current_business = business[recommend[state][food][i + 1]];
    // console.log(current_business);
    // console.log(food_to_biz[state][food][i + 1]);
    // var hungry_score =
    //   food_to_biz[state][food][i + 1][1] * food_to_biz[state][food][i + 1][2];
    // document.getElementsByClassName("recommended_score")[i].innerHTML =
    //   "Hungry Score: <strong>" +
    //   Math.floor(hungry_score * 100) / 100 +
    //   "</strong>";
    pre_star_list =
      '<li class="list-inline-item ml-2"> <p class="text-muted star_rating_number" id = "star_rating_number"><strong>3</strong></p ></li >';

    // console.log(pre_star_list);

    document.getElementsByClassName("restaurant_stars_list")[i].innerHTML = "";
    // console.log(i, document.getElementsByClassName("restaurant_stars_list")[i]);
    for (
      var i_star = 0;
      i_star < Math.floor(current_business.stars);
      i_star++
    ) {
      document.getElementsByClassName("restaurant_stars_list")[
        i
      ].innerHTML += full_star;
    }

    if (current_business.stars != Math.floor(current_business.stars)) {
      document.getElementsByClassName("restaurant_stars_list")[
        i
      ].innerHTML += half_star;
    }
    document.getElementsByClassName("restaurant_stars_list")[
      i
    ].innerHTML += pre_star_list;

    document.getElementsByClassName("restaurant_name")[i].innerHTML =
      (i + 1).toString() + ". " + current_business.name;

    document.getElementsByClassName("star_rating_number")[i].innerHTML =
      "<strong>" + current_business.stars + "</strong>";
    document.getElementsByClassName("review_count")[i].innerHTML =
      "Review Count: <strong>" + current_business.review_count + "</strong>";

    document.getElementsByClassName("restaurant_address")[i].innerHTML =
      current_business.address + ", " + current_business.city;

    categories = current_business.categories.split(" ").join("").split(";");
    tags = "";
    for (var k = 0; k < categories.length; k++) {
      tags += "#" + categories[k] + " ";
    }
    // console.log(tags);
    document.getElementsByClassName("cuisine_tags")[i].innerHTML =
      "<strong>" + tags + "</strong>";
    document.getElementsByClassName("restaurant_name")[i].id = i + 1;
    // console.log(document.getElementsByClassName("restaurant_name")[i]);

    document.getElementsByClassName("map_call")[i].id = "map_call_" + (i + 1);
    document.getElementsByClassName("restaurant_select")[i].id =
      "restaurant_select_" + (i + 1);
    // document.getElementsByClassName("read_more")[i].id = "read_more_" + (i + 1);

    // Change Images
    // https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img(5).jpg

    var rest_img = document.getElementsByClassName("card-img-top");
    for (var rest_img_i = 0; rest_img_i < rest_img.length; rest_img_i++) {
      rest_img[rest_img_i].setAttribute(
        "src",
        "assets/img/restaurant/" + Math.floor(Math.random() * 52) + ".jpg"
      );
      // console.log(
      //   "assets/img/restaurant/" + Math.floor(Math.random() * 52) + ".jpg"
      // );
    }
  }

  var get_rest_id, get_selected_food, get_selected_state;
  var pre_query_string = "https://www.google.com/maps/embed/v1/place?q==",
    key = "AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8";
  var pre_query_string_link = "https://maps.google.com/maps?q=";
  var full_address_frame, full_address_link;

  $("button.map_call").click(function () {
    get_rest_id = $(this).attr("id").split("_");
    get_rest_id = get_rest_id[get_rest_id.length - 1];

    get_selected_food = document
      .getElementById("selected_food")
      .innerHTML.substring(1);
    get_selected_state = document.getElementById("selected_state").innerHTML;

    // console.log(
    //   business[recommend[get_selected_state][get_selected_food][get_rest_id]]
    // );

    full_address_frame =
      business[recommend[get_selected_state][get_selected_food][get_rest_id]]
        .name +
      " " +
      business[recommend[get_selected_state][get_selected_food][get_rest_id]]
        .address +
      " " +
      business[recommend[get_selected_state][get_selected_food][get_rest_id]]
        .city;

    full_address_link =
      pre_query_string_link +
      encodeURI(
        business[recommend[get_selected_state][get_selected_food][get_rest_id]]
          .name
      ) +
      ",+" +
      encodeURI(
        business[recommend[get_selected_state][get_selected_food][get_rest_id]]
          .address +
          business[
            recommend[get_selected_state][get_selected_food][get_rest_id]
          ].city
      );

    var lat_long_link =
      "http://maps.google.com/maps?z=12&t=m&q=loc:" +
      business[recommend[get_selected_state][get_selected_food][get_rest_id]]
        .latitude +
      "+" +
      business[recommend[get_selected_state][get_selected_food][get_rest_id]]
        .longitude;
    document
      .getElementsByClassName("lat_long_link")[0]
      .setAttribute("href", lat_long_link);

    document
      .getElementsByClassName("map_link")[0]
      .setAttribute("href", full_address_link);

    full_address_frame = full_address_frame.split(" ").join("+");

    full_address_frame = pre_query_string + full_address_frame + "&key=" + key;
    // console.log(full_address_frame);
    // console.log(full_address_link);

    document
      .getElementsByClassName("map_frame")[0]
      .setAttribute("src", full_address_frame);

    $("#btnTrigger1").click();
  });

  $("button.restaurant_select").click(function () {
    // var class_names = $(this).attr("class").split(" ");
    // console.log($(this));
    // console.log(document.getElementsByClassName("monday")[0]);
    // console.log(document.getElementsByClassName("tuesday")[0]);
    // console.log(document.getElementsByClassName("wednesday")[0]);
    // console.log(document.getElementsByClassName("thursday")[0]);
    // console.log(document.getElementsByClassName("friday")[0]);
    // console.log(document.getElementsByClassName("saturday")[0]);
    // console.log(document.getElementsByClassName("sunday")[0]);
    document.getElementById("display_rest").style.display = "block";

    document.getElementById("table").style.display = "block";
    document.getElementById("restaurant_details").style.display = "block";
    document.getElementsByClassName("restaurant_details")[0].style.display =
      "block";
    get_rest_id = $(this).attr("id").split("_");
    get_rest_id = get_rest_id[get_rest_id.length - 1];

    document.getElementById(
      "display_rest"
    ).innerHTML = document.getElementsByClassName("restaurant_name")[
      get_rest_id - 1
    ].innerHTML;

    get_selected_food = document
      .getElementById("selected_food")
      .innerHTML.substring(1);
    get_selected_state = document.getElementById("selected_state").innerHTML;

    // console.log(get_rest_id, get_selected_state, get_selected_food);

    // console.log(get_rest_id, get_selected_state, get_selected_food);

    // console.log(document.getElementsByClassName("monday")[0].innerHTML);

    document.getElementsByClassName("monday")[0].innerHTML =
      hours[
        recommend[get_selected_state][get_selected_food][get_rest_id]
      ].monday;
    document.getElementsByClassName("tuesday")[0].innerHTML =
      hours[
        recommend[get_selected_state][get_selected_food][get_rest_id]
      ].tuesday;
    document.getElementsByClassName("wednesday")[0].innerHTML =
      hours[
        recommend[get_selected_state][get_selected_food][get_rest_id]
      ].wednesday;
    document.getElementsByClassName("thursday")[0].innerHTML =
      hours[
        recommend[get_selected_state][get_selected_food][get_rest_id]
      ].thursday;
    document.getElementsByClassName("friday")[0].innerHTML =
      hours[
        recommend[get_selected_state][get_selected_food][get_rest_id]
      ].friday;
    document.getElementsByClassName("saturday")[0].innerHTML =
      hours[
        recommend[get_selected_state][get_selected_food][get_rest_id]
      ].saturday;
    document.getElementsByClassName("sunday")[0].innerHTML =
      hours[
        recommend[get_selected_state][get_selected_food][get_rest_id]
      ].sunday;

    // console.log(us_checkin);

    var mon =
      us_checkin[recommend[get_selected_state][get_selected_food][get_rest_id]][
        "Mon"
      ];
    var tue =
      us_checkin[recommend[get_selected_state][get_selected_food][get_rest_id]][
        "Tue"
      ];
    var wed =
      us_checkin[recommend[get_selected_state][get_selected_food][get_rest_id]][
        "Wed"
      ];
    var thu =
      us_checkin[recommend[get_selected_state][get_selected_food][get_rest_id]][
        "Thu"
      ];
    var fri =
      us_checkin[recommend[get_selected_state][get_selected_food][get_rest_id]][
        "Fri"
      ];
    var sat =
      us_checkin[recommend[get_selected_state][get_selected_food][get_rest_id]][
        "Sat"
      ];
    var sun =
      us_checkin[recommend[get_selected_state][get_selected_food][get_rest_id]][
        "Sun"
      ];

    var checkin_data = [mon, tue, wed, thu, fri, sat, sun];

    for (
      var checkin_index = 0;
      checkin_index < checkin_data.length;
      checkin_index++
    ) {
      if (checkin_data[checkin_index] == null) {
        checkin_data[checkin_index] = "Data Unavailable";
      }
    }

    document.getElementById("checkin_canvas").innerHTML = "";
    document.getElementById("checkin_canvas").innerHTML =
      "<canvas id = 'myChart' width = '200' height = '200' style='margin-left: 20px;'></canvas >";

    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "# of Checkin",
            data: checkin_data,
            backgroundColor: [
              "rgba(255, 159, 64, 0.75)",
              "rgba(255, 159, 64, 0.75)",
              "rgba(255, 159, 64, 0.75)",
              "rgba(255, 159, 64, 0.75)",
              "rgba(255, 159, 64, 0.75)",
              "rgba(255, 159, 64, 0.75)",
              "rgba(255, 159, 64, 0.75)",
            ],
            borderColor: [
              "rgba(255, 159, 64, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 2,
          },
          // {
          //   label: "# Checkin Trend",
          //   data: checkin_data,
          //   // Changes this dataset to become a line
          //   type: "line",
          // },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              gridLines: {
                offsetGridLines: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                offsetGridLines: true,
              },
            },
          ],
        },
      },
    });
  });
}
