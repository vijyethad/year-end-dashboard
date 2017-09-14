import React from 'react';
import SummaryBoxRow from './SummaryBoxRow';
import Box from '../components/Box';
import ApplicationsInfoTable from '../components/ApplicationsInfoTable';
import { Chart } from 'react-google-charts';

let warning = 0
let blocked = 0
let healthy = 0

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
	{ 'activityName': 'Complete the UI coding', 'status': 'Warning', 'startDate': '10/10/2017', 'startTime' : '9:00 am',
		'endDate': '10/25/2017', 'endTime': '5:00 pm', 'duration': '15 days', 'cognizantPoc': 'NARAYANAMURTHY, BALAJI Z [AG-Contractor/1000] <balaji.z.narayanamurthy@monsanto.com>',
		'monsantoPoc': 'xyz', 'businessPoc': 'abc' , 'followUp':'Lead Developer', 'dependency' : 'None', 'milestone': "None" },
	{ 'activityName': 'Complete the UI coding', 'status': 'Warning', 'startDate': '10/10/2017', 'startTime' : '9:00 am',
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
	}
)

const Dashboard = (props) => {
	return (
        <div>
          <div className="row">
            <h1 className="ChartBox-title">
              Year-End Dashboard
            </h1>
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
          <Chart
              options={{
				  				chartArea: {'width': '100%', 'height': '75px'},
				  				colors: ['#2ecc71','#e74c3c', '#e67e22'],
									legend: {'position': 'bottom'}
			  			}}
              chartType="PieChart"
              data={getPieChartData(healthy, blocked, warning)}
              width={"100%"}
              height={"300px"}
          />
        </div>

	);
};

// This is providing only mockup data
function getPieChartData(good, blocked, warning) {
	return [
		['Health', 'Number of Apps'],
		['Good', good],
		['Blocked', blocked],
		['Warning', warning]
	];
}

export default Dashboard;
