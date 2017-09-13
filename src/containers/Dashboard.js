import React, { Component, PropTypes } from 'react';
import SummaryBoxRow from './SummaryBoxRow';
import Box from '../components/Box';
import ApplicationsInfoTable from '../components/ApplicationsInfoTable';
import { Chart } from 'react-google-charts';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

let warning = 0
let blocked = 0
let healthy = 0
let i =0

const product = [{ 'activityName': 'Complete the UI coding', 'status': 'Good', 'startDate': '10/10/2017', 'startTime' : '9:00 am',
'endDate': '10/25/2017', 'endTime': '5:00 pm', 'duration': '15 days', 'cognizantPoc': 'NARAYANAMURTHY, BALAJI Z [AG-Contractor/1000] <balaji.z.narayanamurthy@monsanto.com>',
'monsantoPoc': 'xyz', 'businessPoc': 'abc' , 'followUp':'Lead Developer', 'dependency' : 'None', 'milestone': "None" },
  { 'activityName': 'Complete Unit Testing', 'status': 'Good', 'startDate': '10/10/2017', 'startTime' : '9:00 am',
    'endDate': '10/25/2017', 'endTime': '5:00 pm', 'duration': '15 days', 'cognizantPoc': 'NARAYANAMURTHY, BALAJI Z [AG-Contractor/1000] <balaji.z.narayanamurthy@monsanto.com>',
    'monsantoPoc': 'xyz', 'businessPoc': 'abc' , 'followUp':'Lead Developer', 'dependency' : 'None', 'milestone': "None" },
  { 'activityName': 'Complete the UI coding', 'status': 'Good', 'startDate': '10/10/2017', 'startTime' : '9:00 am',
    'endDate': '10/25/2017', 'endTime': '5:00 pm', 'duration': '15 days', 'cognizantPoc': 'NARAYANAMURTHY, BALAJI Z [AG-Contractor/1000] <balaji.z.narayanamurthy@monsanto.com>',
    'monsantoPoc': 'xyz', 'businessPoc': 'abc' , 'followUp':'Lead Developer', 'dependency' : 'None', 'milestone': "None" },
  { 'activityName': 'UI Mockups', 'status': 'Good', 'startDate': '10/10/2017', 'startTime' : '9:00 am',
    'endDate': '10/25/2017', 'endTime': '5:00 pm', 'duration': '15 days', 'cognizantPoc': 'NARAYANAMURTHY, BALAJI Z [AG-Contractor/1000] <balaji.z.narayanamurthy@monsanto.com>',
    'monsantoPoc': 'xyz', 'businessPoc': 'abc' , 'followUp':'Lead Developer', 'dependency' : 'None', 'milestone': "None" },
  { 'activityName': 'Run Batch Jobs', 'status': 'Warning', 'startDate': '10/10/2017', 'startTime' : '9:00 am',
    'endDate': '10/25/2017', 'endTime': '5:00 pm', 'duration': '15 days', 'cognizantPoc': 'NARAYANAMURTHY, BALAJI Z [AG-Contractor/1000] <balaji.z.narayanamurthy@monsanto.com>',
    'monsantoPoc': 'xyz', 'businessPoc': 'abc' , 'followUp':'Lead Developer', 'dependency' : 'None', 'milestone': "None" },
  { 'activityName': 'Create New Database Tables', 'status': 'Good', 'startDate': '10/10/2017', 'startTime' : '9:00 am',
    'endDate': '10/25/2017', 'endTime': '5:00 pm', 'duration': '15 days', 'cognizantPoc': 'NARAYANAMURTHY, BALAJI Z [AG-Contractor/1000] <balaji.z.narayanamurthy@monsanto.com>',
    'monsantoPoc': 'xyz', 'businessPoc': 'abc' , 'followUp':'Lead Developer', 'dependency' : 'None', 'milestone': "None" },
  { 'activityName': 'Complete the UI coding', 'status': 'Good', 'startDate': '10/10/2017', 'startTime' : '9:00 am',
    'endDate': '10/25/2017', 'endTime': '5:00 pm', 'duration': '15 days', 'cognizantPoc': 'NARAYANAMURTHY, BALAJI Z [AG-Contractor/1000] <balaji.z.narayanamurthy@monsanto.com>',
    'monsantoPoc': 'xyz', 'businessPoc': 'abc' , 'followUp':'Lead Developer', 'dependency' : 'None', 'milestone': "None" },
  { 'activityName': 'Complete the UI coding', 'status': 'Good', 'startDate': '10/10/2017', 'startTime' : '9:00 am',
    'endDate': '10/25/2017', 'endTime': '5:00 pm', 'duration': '15 days', 'cognizantPoc': 'NARAYANAMURTHY, BALAJI Z [AG-Contractor/1000] <balaji.z.narayanamurthy@monsanto.com>',
    'monsantoPoc': 'xyz', 'businessPoc': 'abc' , 'followUp':'Lead Developer', 'dependency' : 'None', 'milestone': "None" },
  { 'activityName': 'Complete the UI coding', 'status': 'Good', 'startDate': '10/10/2017', 'startTime' : '9:00 am',
    'endDate': '10/25/2017', 'endTime': '5:00 pm', 'duration': '15 days', 'cognizantPoc': 'NARAYANAMURTHY, BALAJI Z [AG-Contractor/1000] <balaji.z.narayanamurthy@monsanto.com>',
    'monsantoPoc': 'xyz', 'businessPoc': 'abc' , 'followUp':'Lead Developer', 'dependency' : 'None', 'milestone': "None" },
  { 'activityName': 'Complete the UI coding', 'status': 'Good', 'startDate': '10/10/2017', 'startTime' : '9:00 am',
    'endDate': '10/25/2017', 'endTime': '5:00 pm', 'duration': '15 days', 'cognizantPoc': 'NARAYANAMURTHY, BALAJI Z [AG-Contractor/1000] <balaji.z.narayanamurthy@monsanto.com>',
    'monsantoPoc': 'xyz', 'businessPoc': 'abc' , 'followUp':'Lead Developer', 'dependency' : 'None', 'milestone': "None" },
  { 'activityName': 'Complete the UI coding', 'status': 'Blocked', 'startDate': '10/10/2017', 'startTime' : '9:00 am',
    'endDate': '10/25/2017', 'endTime': '5:00 pm', 'duration': '15 days', 'cognizantPoc': 'NARAYANAMURTHY, BALAJI Z [AG-Contractor/1000] <balaji.z.narayanamurthy@monsanto.com>',
    'monsantoPoc': 'xyz', 'businessPoc': 'abc' , 'followUp':'Lead Developer', 'dependency' : 'None', 'milestone': "None" },
  { 'activityName': 'Complete the UI coding', 'status': 'Good', 'startDate': '10/10/2017', 'startTime' : '9:00 am',
    'endDate': '10/25/2017', 'endTime': '5:00 pm', 'duration': '15 days', 'cognizantPoc': 'NARAYANAMURTHY, BALAJI Z [AG-Contractor/1000] <balaji.z.narayanamurthy@monsanto.com>',
    'monsantoPoc': 'xyz', 'businessPoc': 'abc' , 'followUp':'Lead Developer', 'dependency' : 'None', 'milestone': "None" },{ 'activityName': 'Complete the UI coding', 'status': 'Good', 'startDate': '10/10/2017', 'startTime' : '9:00 am',
    'endDate': '10/25/2017', 'endTime': '5:00 pm', 'duration': '15 days', 'cognizantPoc': 'NARAYANAMURTHY, BALAJI Z [AG-Contractor/1000] <balaji.z.narayanamurthy@monsanto.com>',
    'monsantoPoc': 'xyz', 'businessPoc': 'abc' , 'followUp':'Lead Developer', 'dependency' : 'None', 'milestone': "None" },


]

const calculation = product.map((product) => {
if(product.status ==='Good') {
   healthy = ++healthy;
  return healthy
}

else if(product.status ==='Warning'){
  warning = ++warning;
  return warning
}
else {
  blocked = ++blocked;
  return blocked
}
return null
}
)
//
// product.forEach(function(product, i) {
//   console.log(product.i);
// });

const Dashboard = (props) => {
  return (
    <div>
      <div className="row">
        <h2 className="ChartBox-title">
          Year-End Dashboard
        </h2>
          <Box className="ChartBox">
            <SummaryBoxRow
              warning={warning}
              blocked={blocked}
              healthy={healthy}
              total={warning+blocked+healthy}
            />
          </Box>
      </div>
      <div>
      <ApplicationsInfoTable applicationData={product}/>
      </div>
      </div>

  );
};


// This is providing only mockup data



function getPieChartData() {
  return [
    ['Health', 'Number of Apps'],
    ['Total', 296]
    ['Good', 210],
    ['Blocked', 50],
    ['Warning', 36]
  ];
}

export default Dashboard;
