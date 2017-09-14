import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import PropTypes from 'prop-types'
import React from 'react'

const ApplicationsInfoTable = ({ applicationData }) => (
    <div>
		{applicationData && applicationData.length > 0 ?
            <BootstrapTable scrollTop={ 'Bottom' } data={applicationData} striped hover>
              <TableHeaderColumn width='250' isKey dataField="activityName">Activity Name</TableHeaderColumn>
              <TableHeaderColumn width='100' dataField="status">Status</TableHeaderColumn>
              <TableHeaderColumn width='100' dataField="startDate">Start Date</TableHeaderColumn>
              <TableHeaderColumn width='150' dataField="startTime">Start Time</TableHeaderColumn>
              <TableHeaderColumn width='100' dataField="endDate">End Date</TableHeaderColumn>
              <TableHeaderColumn width='150' dataField="endTime">End Time</TableHeaderColumn>
              <TableHeaderColumn width='150' dataField="duration">Duration</TableHeaderColumn>
              <TableHeaderColumn width='250' dataField="cognizantPoc">Cognizant POC</TableHeaderColumn>
              <TableHeaderColumn width='250' dataField="monsantoPoc">Monsanto POC</TableHeaderColumn>
              <TableHeaderColumn width='250' dataField="businessPoc">Business POC</TableHeaderColumn>
              <TableHeaderColumn width='250' dataField="followUp">Follow Up</TableHeaderColumn>
              <TableHeaderColumn width='250' dataField="dependency">Dependency</TableHeaderColumn>
              <TableHeaderColumn width='250' dataField="milestone">Milestone/Checkpoint</TableHeaderColumn>
            </BootstrapTable>
			:
			null
		}
    </div>
)

ApplicationsInfoTable.displayName = 'ApplicationsInfoTable'

ApplicationsInfoTable.propTypes = {
	applicationData: PropTypes.array
}

export default ApplicationsInfoTable
