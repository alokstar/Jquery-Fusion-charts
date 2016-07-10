FusionCharts.ready(function(){
       var revenueChart = new FusionCharts({
                "type": "column2d",
                "renderAt": "chartContainer",
                "width": "500",
                "height": "300",
                "dataFormat": "json",
                "dataSource":  {
                 "chart": {
                      "caption": "Monthly revenue",
                           "subCaption": "Campus & Dining Shops",
                           "xAxisName": "Month",
                            "yAxisName": "Revenues (In USD)",
                            "theme": "fint"
                     },
                 "data": [
                     {
                         "label": "Jan",
                          "value": "1230000"
                        },
                   {
                           "label": "Feb",
                               "value": "456000"
                       },
                   {
                           "label": "Mar",
                               "value": "789000"
                        },
                    {
                          "label": "Apr",
                              "value": "234000"
                       },
                  {
                           "label": "May",
                              "value": "345000"
                      },
                  {
                         "label": "Jun",
                               "value": "456000"
                      },
                  {
                           "label": "Jul",
                              "value": "567000"
                      },
                  {
                          "label": "Aug",
                               "value": "620000"
                      },
                  {
                          "label": "Sep",
                             "value": "610000"
                      },
                  {
                           "label": "Oct",
                               "value": "876000"
                      },
                  {
                          "label": "Nov",
                              "value": "987000"
                      },
                  {
                          "label": "Dec",
                              "value": "567000"
                      }
                ]
              }
    
      });
    revenueChart.render();
    })