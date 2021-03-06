import React, { useState, useEffect, PropTypes } from "react";
import { Doughnut, defaults } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels'
import "./App.css";
import { Divider } from 'antd';
import './styles.css'
import { ResponsiveLine } from '@nivo/line'
import { ResponsiveBar } from '@nivo/bar'

import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const  defaultTheme = {
    background: 'transparent',
    fontFamily: 'Prompt-Regular',
    fontSize: 16,
    textColor: '#333333',
    axis: {
      domain: {
        line: {
          stroke: 'transparent',
          strokeWidth: 1
        }
      },
      ticks: {
        line: {
          stroke: '#777777',
          strokeWidth: 1
        },
        text: {}
      },
      legend: {
        text: {
          fontSize: 16
        }
      }
    },
    grid: {
      line: {
        stroke: '#dddddd',
        strokeWidth: 1
      }
    },
    legends: {
      text: {
        fill: '#333333'
      }
    },
    labels: {
      text: {}
    },
    markers: {
      lineColor: '#000000',
      lineStrokeWidth: 1,
      text: {}
    },
    dots: {
      text: {}
    },
    tooltip: {
      container: {
        background: 'white',
        color: 'inherit',
        fontSize: 'inherit',
        borderRadius: '2px',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.25)',
        padding: '5px 9px'
      },
      basic: {
        whiteSpace: 'pre',
        display: 'flex',
        alignItems: 'center'
      },
      chip: {
        marginRight: 7
      },
      table: {},
      tableCell: {
        padding: '3px 5px'
      }
    },
    crosshair: {
      line: {
        stroke: '#000000',
        strokeWidth: 1,
        strokeOpacity: 0.75,
        strokeDasharray: '6 6'
      }
    },
    annotations: {
      text: {
        fontSize: 16,
        outlineWidth: 2,
        outlineColor: '#ffffff'
      },
      link: {
        stroke: '#000000',
        strokeWidth: 1,
        outlineWidth: 2,
        outlineColor: '#ffffff'
      },
      outline: {
        fill: 'none',
        stroke: '#000000',
        strokeWidth: 2,
        outlineWidth: 2,
        outlineColor: '#ffffff'
      },
      symbol: {
        fill: '#000000',
        outlineWidth: 2,
        outlineColor: '#ffffff'
      }
    }
  }

const dataNivo1 = [

    {
        "id":"????????????????????????????????????????????? ??????????????????????????????????????????(??????????????????)",
        "color":"hsl(58, 100%, 31%)",
        "data":[
         {
             "x":"07/2563",
             "y":462
          },
          {
             "x":"08/2563",
             "y":797
          },
          {
             "x":"09/2563",
             "y":393
          }, 
         {
             "x":"10/2563",
             "y":511
          }, 
          {
             "x":"11/2563",
             "y":0
          },
          {
             "x":"12/2563",
             "y":0
          },
           {
              "x":"01/2564",
              "y":0
           },
           {
              "x":"02/2564",
              "y":0
           }
        ]
     },
     {
        "id":"??????????????????????????????????????????????????????????????????(??????????????????)",
        "color":"hsl(304, 100%, 50%)",
        "data":[
         {
             "x":"07/2563",
             "y":409
           },
           {
             "x":"08/2563",
             "y":428
           },
           {
             "x":"09/2563",
             "y":339
           },
           {
             "x":"10/2563",
             "y":448
           },
           {
             "x":"11/2563",
             "y":0
           },
           {
             "x":"12/2563",
             "y":0
           },
           {
              "x":"01/2564",
              "y":0
           },
           {
              "x":"02/2564",
              "y":0
           }
        ]
       
     },
    {
       "id":"????????????????????????????????????????????? ??????????????????????????????????????????",
       "color":"hsl(58, 100%, 31%)",
       "data":[
        {
            "x":"07/2563",
            "y":0
         },
         {
            "x":"08/2563",
            "y":0
         },
         {
            "x":"09/2563",
            "y":0
         }, 
        {
            "x":"10/2563",
            "y":47
         }, 
         {
            "x":"11/2563",
            "y":163
         },
         {
            "x":"12/2563",
            "y":242
         },
          {
             "x":"01/2564",
             "y":311
          },
          {
             "x":"02/2564",
             "y":487
          }
       ]
    },

    {
       "id":"??????????????????????????????????????????????????????????????????",
       "color":"hsl(304, 100%, 50%)",
       "data":[
        {
            "x":"07/2563",
            "y":0
          },
          {
            "x":"08/2563",
            "y":0
          },
          {
            "x":"09/2563",
            "y":0
          },
          {
            "x":"10/2563",
            "y":32
          },
          {
            "x":"11/2563",
            "y":124
          },
          {
            "x":"12/2563",
            "y":162
          },
          {
             "x":"01/2564",
             "y":181
          },
          {
             "x":"02/2564",
             "y":174
          }
       ]
      
    }
 ]


const dataBar1 = [
    {
        "?????????":"????????? 1",
        "????????????????????????????????????????????? ??????????????????????????????????????????":33,
        "hot dogColor":"hsl(305, 70%, 50%)",
        "??????????????????????????????????????????????????????????????????":18,
        "burgerColor":"hsl(155, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 2",
        "????????????????????????????????????????????? ??????????????????????????????????????????":70,
        "hot dogColor":"hsl(299, 70%, 50%)",
        "??????????????????????????????????????????????????????????????????":56,
        "burgerColor":"hsl(165, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 3",
        "????????????????????????????????????????????? ??????????????????????????????????????????":38,
        "hot dogColor":"hsl(305, 70%, 50%)",
        "??????????????????????????????????????????????????????????????????":28,
        "burgerColor":"hsl(155, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 4",
        "????????????????????????????????????????????? ??????????????????????????????????????????":21,
        "hot dogColor":"hsl(299, 70%, 50%)",
        "??????????????????????????????????????????????????????????????????":10,
        "burgerColor":"hsl(165, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 5",
        "????????????????????????????????????????????? ??????????????????????????????????????????":76,
        "hot dogColor":"hsl(305, 70%, 50%)",
        "??????????????????????????????????????????????????????????????????":39,
        "burgerColor":"hsl(155, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 6",
        "????????????????????????????????????????????? ??????????????????????????????????????????":33,
        "hot dogColor":"hsl(299, 70%, 50%)",
        "??????????????????????????????????????????????????????????????????":26,
        "burgerColor":"hsl(165, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 7",
        "????????????????????????????????????????????? ??????????????????????????????????????????":35,
        "hot dogColor":"hsl(305, 70%, 50%)",
        "??????????????????????????????????????????????????????????????????":12,
        "burgerColor":"hsl(155, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 8",
        "????????????????????????????????????????????? ??????????????????????????????????????????":74,
        "hot dogColor":"hsl(299, 70%, 50%)",
        "??????????????????????????????????????????????????????????????????":33,
        "burgerColor":"hsl(165, 70%, 50%)",
        
     },
    {
       "?????????":"????????? 9",
       "????????????????????????????????????????????? ??????????????????????????????????????????":82,
       "hot dogColor":"hsl(305, 70%, 50%)",
       "??????????????????????????????????????????????????????????????????":26,
       "burgerColor":"hsl(155, 70%, 50%)",
       
    },
    {
       "?????????":"????????? 10",
       "????????????????????????????????????????????? ??????????????????????????????????????????":52,
       "hot dogColor":"hsl(299, 70%, 50%)",
       "??????????????????????????????????????????????????????????????????":39,
       "burgerColor":"hsl(165, 70%, 50%)",
       
    },
    {
        "?????????":"????????? 11",
        "????????????????????????????????????????????? ??????????????????????????????????????????":119,
        "hot dogColor":"hsl(305, 70%, 50%)",
        "??????????????????????????????????????????????????????????????????":58,
        "burgerColor":"hsl(155, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 12",
        "????????????????????????????????????????????? ??????????????????????????????????????????":37,
        "hot dogColor":"hsl(299, 70%, 50%)",
        "??????????????????????????????????????????????????????????????????":3,
        "burgerColor":"hsl(165, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 13",
        "????????????????????????????????????????????? ??????????????????????????????????????????":48,
        "hot dogColor":"hsl(305, 70%, 50%)",
        "??????????????????????????????????????????????????????????????????":41,
        "burgerColor":"hsl(155, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 14",
        "????????????????????????????????????????????? ??????????????????????????????????????????":70,
        "hot dogColor":"hsl(299, 70%, 50%)",
        "??????????????????????????????????????????????????????????????????":15,
        "burgerColor":"hsl(165, 70%, 50%)",
        
     },
    {
       "?????????":"????????? 15",
       "????????????????????????????????????????????? ??????????????????????????????????????????":130,
       "hot dogColor":"hsl(92, 70%, 50%)",
       "??????????????????????????????????????????????????????????????????":79,
       "burgerColor":"hsl(101, 70%, 50%)",
       
    },
    {
        "?????????":"????????? 16",
        "????????????????????????????????????????????? ??????????????????????????????????????????":154,
        "hot dogColor":"hsl(305, 70%, 50%)",
        "??????????????????????????????????????????????????????????????????":92,
        "burgerColor":"hsl(155, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 17",
        "????????????????????????????????????????????? ??????????????????????????????????????????":88,
        "hot dogColor":"hsl(299, 70%, 50%)",
        "??????????????????????????????????????????????????????????????????":34,
        "burgerColor":"hsl(165, 70%, 50%)",
        
     },
    {
       "?????????":"????????? 18",
       "????????????????????????????????????????????? ??????????????????????????????????????????":43,
       "hot dogColor":"hsl(92, 70%, 50%)",
       "??????????????????????????????????????????????????????????????????":32,
       "burgerColor":"hsl(101, 70%, 50%)",
       
    }
 ]



 const dataNivo2 = [
    {
       "id":"????????????????????????????????????????????? ???????????????????????????????????????????????????",
       "color":"hsl(316, 70%, 50%)",
       "data":[
         {
            "x":"11/2563",
            "y":1
         },
         {
            "x":"12/2563",
            "y":0
         },
          {
             "x":"01/2564",
             "y":3
          },
          {
             "x":"02/2564",
             "y":4
          }
       ]
    },
    {
       "id":"???????????????????????????????????????????????????????????????????????????",
       "color":"hsl(304, 100%, 50%)",
       "data":[
          {
            "x":"11/2563",
            "y":1
          },
          {
            "x":"12/2563",
            "y":0
          },
          {
             "x":"01/2564",
             "y":3
          },
          {
             "x":"02/2564",
             "y":4
          }
       ]
      
    }
 ]


const dataBar2 = [
    {
        "?????????":"????????? 1",
        "????????????????????????????????????????????? ???????????????????????????????????????????????????":0,
        "hot dogColor":"hsl(316, 70%, 50%)",
        "???????????????????????????????????????????????????????????????????????????":0,
        "burgerColor":"hsl(155, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 2",
        "????????????????????????????????????????????? ???????????????????????????????????????????????????":0,
        "hot dogColor":"hsl(299, 70%, 50%)",
        "???????????????????????????????????????????????????????????????????????????":0,
        "burgerColor":"hsl(165, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 3",
        "????????????????????????????????????????????? ???????????????????????????????????????????????????":0,
        "hot dogColor":"hsl(316, 70%, 50%)",
        "???????????????????????????????????????????????????????????????????????????":0,
        "burgerColor":"hsl(155, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 4",
        "????????????????????????????????????????????? ???????????????????????????????????????????????????":0,
        "hot dogColor":"hsl(316, 70%, 50%)",
        "???????????????????????????????????????????????????????????????????????????":0,
        "burgerColor":"hsl(165, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 5",
        "????????????????????????????????????????????? ???????????????????????????????????????????????????":0,
        "hot dogColor":"hsl(316, 70%, 50%)",
        "???????????????????????????????????????????????????????????????????????????":0,
        "burgerColor":"hsl(155, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 6",
        "????????????????????????????????????????????? ???????????????????????????????????????????????????":2,
        "hot dogColor":"hsl(316, 70%, 50%)",
        "???????????????????????????????????????????????????????????????????????????":2,
        "burgerColor":"hsl(165, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 7",
        "????????????????????????????????????????????? ???????????????????????????????????????????????????":0,
        "hot dogColor":"hsl(316, 70%, 50%)",
        "???????????????????????????????????????????????????????????????????????????":0,
        "burgerColor":"hsl(155, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 8",
        "????????????????????????????????????????????? ???????????????????????????????????????????????????":0,
        "hot dogColor":"hsl(316, 70%, 50%)",
        "???????????????????????????????????????????????????????????????????????????":0,
        "burgerColor":"hsl(165, 70%, 50%)",
        
     },
    {
       "?????????":"????????? 9",
       "????????????????????????????????????????????? ???????????????????????????????????????????????????":0,
       "hot dogColor":"hsl(316, 70%, 50%)",
       "???????????????????????????????????????????????????????????????????????????":0,
       "burgerColor":"hsl(155, 70%, 50%)",
       
    },
    {
       "?????????":"????????? 10",
       "????????????????????????????????????????????? ???????????????????????????????????????????????????":0,
       "hot dogColor":"hsl(299, 70%, 50%)",
       "???????????????????????????????????????????????????????????????????????????":0,
       "burgerColor":"hsl(165, 70%, 50%)",
       
    },
    {
        "?????????":"????????? 11",
        "????????????????????????????????????????????? ???????????????????????????????????????????????????":0,
        "hot dogColor":"hsl(316, 70%, 50%)",
        "???????????????????????????????????????????????????????????????????????????":0,
        "burgerColor":"hsl(155, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 12",
        "????????????????????????????????????????????? ???????????????????????????????????????????????????":2,
        "hot dogColor":"hsl(316, 70%, 50%)",
        "???????????????????????????????????????????????????????????????????????????":2,
        "burgerColor":"hsl(165, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 13",
        "????????????????????????????????????????????? ???????????????????????????????????????????????????":3,
        "hot dogColor":"hsl(316, 70%, 50%)",
        "???????????????????????????????????????????????????????????????????????????":3,
        "burgerColor":"hsl(155, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 14",
        "????????????????????????????????????????????? ???????????????????????????????????????????????????":0,
        "hot dogColor":"hsl(316, 70%, 50%)",
        "???????????????????????????????????????????????????????????????????????????":0,
        "burgerColor":"hsl(165, 70%, 50%)",
        
     },
    {
       "?????????":"????????? 15",
       "????????????????????????????????????????????? ???????????????????????????????????????????????????":0,
       "hot dogColor":"hsl(316, 70%, 50%)",
       "???????????????????????????????????????????????????????????????????????????":0,
       "burgerColor":"hsl(101, 70%, 50%)",
       
    },
    {
        "?????????":"????????? 16",
        "????????????????????????????????????????????? ???????????????????????????????????????????????????":0,
        "hot dogColor":"hsl(316, 70%, 50%)",
        "???????????????????????????????????????????????????????????????????????????":0,
        "burgerColor":"hsl(155, 70%, 50%)",
        
     },
     {
        "?????????":"????????? 17",
        "????????????????????????????????????????????? ???????????????????????????????????????????????????":0,
        "hot dogColor":"hsl(299, 70%, 50%)",
        "???????????????????????????????????????????????????????????????????????????":0,
        "burgerColor":"hsl(165, 70%, 50%)",
        
     },
    {
       "?????????":"????????? 18",
       "????????????????????????????????????????????? ???????????????????????????????????????????????????":1,
       "hot dogColor":"hsl(299, 70%, 50%)",
       "???????????????????????????????????????????????????????????????????????????":1,
       "burgerColor":"hsl(101, 70%, 50%)",
       
    }
 ]

function App() {

    return (
        <React.Fragment>
            <div id="page-guarantee" className="container-fluid py-0 px-4">
                <div className="bg-contain px-4">
                    <div className="row mt-3">
                        <div className="col-12 pt-4"
                        ><h4 className="title-page" style={{ textAlign: 'center' }}>?????????????????????????????????????????????????????? NPL ????????????????????????????????????????????????????????????????????????????????? </h4>
                        </div>

                    </div>
                </div>
            </div>


            <div className="bg-contain px-4" style={{ height: 500 }}   >
                <ResponsiveLine
                    colors={{ scheme: 'paired' }}
                    curve='cardinal'
                    theme={defaultTheme}
                    data={dataNivo1}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                    yFormat=" >-.2f"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 0,
                        tickPadding: -10,
                        tickRotation: 0,
                        legend: '???????????????????????????????????? NPL ???????????????????????????????????? 11/2563 - 02/2564',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: -10,
                        tickRotation: 0,
                        legend: '?????????????????????????????????',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'top',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 1,
                            fontSize: 16,
                            symbolSize: 13,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
           <br/>
           <hr  style={{borderTop: '2px solid #DDDDDD' , margin:'15px'}}/>
        
            <div id="page-guarantee" className="container-fluid py-0 px-4">
                <div className="bg-contain px-4">
                    <div className="row mt-3">
                        <div className="col-12 pt-4"
                        ><h4 className="title-page" style={{ textAlign: 'center' }}>?????????????????????????????????????????????????????? NPL ??????????????????????????????????????????????????????????????????????????? </h4>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-contain px-4" style={{height: 500 }}>
                <ResponsiveBar
                    theme={defaultTheme}
                    data={dataBar1}
                    keys={['????????????????????????????????????????????? ??????????????????????????????????????????', '??????????????????????????????????????????????????????????????????']}
                    indexBy="?????????"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    groupMode="grouped"
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'nivo' }}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: '#38bcb2',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: '#eed312',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'fries'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'sandwich'
                            },
                            id: 'lines'
                        }
                    ]}
                    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: -5,
                        tickRotation: 0,
                        legend: '???????????????????????????????????? NPL ???????????????????????????????????????????????????????????????????????????',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: -10,
                        tickRotation: 0,
                        legend: '?????????????????????????????????',
                        legendPosition: 'middle',
                        legendOffset: -40
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'top',
                            direction: 'column',
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                />
            </div>
            <br/>
            <hr  style={{borderTop: '2px solid #DDDDDD' , margin:'15px'}}/>
            <div id="page-guarantee" className="container-fluid py-0 px-4">
                <div className="bg-contain px-4">
                    <div className="row mt-3">
                        <div className="col-12 pt-4"
                        ><h4 className="title-page" style={{ textAlign: 'center' }}>?????????????????????????????????????????????????????????????????????????????????????????????????????? </h4>
                        </div>

                    </div>
                </div>
            </div>


            <div className="bg-contain px-4" style={{ height: 500 }}   >
                <ResponsiveLine
                    colors={{ scheme: 'paired' }}
                    curve='natural'
                    theme={defaultTheme}
                    data={dataNivo2}
                    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                    yFormat=" >-.2f"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        orient: 'bottom',
                        tickSize: 0,
                        tickPadding: -10,
                        tickRotation: 0,
                        legend: '??????????????????????????????????????????????????? ???????????????????????????????????? 11/2563 - 02/2564',
                        legendOffset: 36,
                        legendPosition: 'middle'
                    }}
                    axisLeft={{
                        orient: 'left',
                        tickSize: 5,
                        tickPadding: -10,
                        tickRotation: 0,
                        legend: '?????????????????????????????????',
                        legendOffset: -40,
                        legendPosition: 'middle'
                    }}
                    pointSize={10}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'top',
                            direction: 'column',
                            justify: false,
                            translateX: 100,
                            translateY: 0,
                            itemsSpacing: 0,
                            itemDirection: 'left-to-right',
                            itemWidth: 80,
                            itemHeight: 20,
                            itemOpacity: 1,
                            fontSize: 16,
                            symbolSize: 13,
                            symbolShape: 'circle',
                            symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemBackground: 'rgba(0, 0, 0, .03)',
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </div>
            <br/>
           <hr  style={{borderTop: '2px solid #DDDDDD' , margin:'15px'}}/>
            <div id="page-guarantee" className="container-fluid py-0 px-4">
                <div className="bg-contain px-4">
                    <div className="row mt-3">
                        <div className="col-12 pt-4"
                        ><h4 className="title-page" style={{ textAlign: 'center' }}>???????????????????????????????????????????????????????????????????????????????????????????????? </h4>
                        </div>

                    </div>
                </div>
            </div>
            <div className="bg-contain px-4" style={{height: 500 }}>
                <ResponsiveBar
                    theme={defaultTheme}
                    data={dataBar2}
                    keys={['????????????????????????????????????????????? ???????????????????????????????????????????????????', '???????????????????????????????????????????????????????????????????????????']}
                    indexBy="?????????"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    groupMode="grouped"
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={{ scheme: 'paired' }}
                    defs={[
                        {
                            id: 'dots',
                            type: 'patternDots',
                            background: 'inherit',
                            color: '#38bcb2',
                            size: 4,
                            padding: 1,
                            stagger: true
                        },
                        {
                            id: 'lines',
                            type: 'patternLines',
                            background: 'inherit',
                            color: '#eed312',
                            rotation: -45,
                            lineWidth: 6,
                            spacing: 10
                        }
                    ]}
                    fill={[
                        {
                            match: {
                                id: 'fries'
                            },
                            id: 'dots'
                        },
                        {
                            match: {
                                id: 'sandwich'
                            },
                            id: 'lines'
                        }
                    ]}
                    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: -5,
                        tickRotation: 0,
                        legend: '??????????????????????????????????????????????????????????????????????????????',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: -10,
                        tickRotation: 0,
                        legend: '?????????????????????????????????',
                        legendPosition: 'middle',
                        legendOffset: -40
                    }}
                    labelSkipWidth={12}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    legends={[
                        {
                            dataFrom: 'keys',
                            anchor: 'top',
                            direction: 'column',
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                />
            </div>      

        </React.Fragment>
    );
}

export default App;
