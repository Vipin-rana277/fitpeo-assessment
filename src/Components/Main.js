import React from "react";
import search from "../assets/images/search.png";
import productImage from "../assets/images/productImage.jpg";
import { BarPlot, ChartContainer } from "@mui/x-charts";
import { PieChart } from '@mui/x-charts/PieChart';

export default function Main() {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 2564, 3800, 3900, 4000];
  const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
    'Page H',
    'Page I',
    'Page J',
    'Page K',
  ];

  const data1 = [
    { label: 'Group A', value: 400 },
    { label: 'Group B', value: 300 },
    { label: 'Group C', value: 300 },
    { label: 'Group D', value: 200 },
    { label: 'Group E', value: 278 },
    { label: 'Group F', value: 189 },
  ];

  return (
    <>
      <div className="main">
        <div className="overView">
          <b>Overview</b>
          <ChartContainer
            width={820}
            height={260}
            series={[{ data: uData, label: 'uv', type: 'bar' }]}
            xAxis={[{ scaleType: 'band', data: xLabels }]}
          >
            <BarPlot />
          </ChartContainer>

        </div>
        <div className="customers">
          <b>Customers</b>
          <PieChart
            series={[
              {
                outerRadius: 80,

                data: data1,
              },
            ]}
            height={250}
            width={450}
            slotProps={{
              legend: { hidden: true },
            }}
          />

        </div>
      </div>
      <div className="footer-container">
        <div className="Product-container">
          <div className="Product">
            <h4>Product Sell</h4>
            <p><span><img style={{ width: '10px', height: '10px' }} src={search} />search</span> <span>Last 30 days</span></p>
          </div>
          <div className="Product-name">
            <p>Product Name</p>
            <p><span id="stocks">Stock</span><span>Price</span><span>Total Sales</span></p>
          </div>
          <div className="Product-1">
            <div><img style={{ height: "28px", width: "35px" }} src={productImage} /><p><b>Abstract 3D</b><br></br>Lorem ipsum dolor sit amet</p></div>
            <p><span >32 in stock</span><span>$45.99</span><span>20</span></p>
          </div>
        </div>
      </div>
    </>
  )

}