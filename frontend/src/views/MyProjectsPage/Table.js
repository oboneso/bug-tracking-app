import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';

const Table = () => {
	return (
		<TableContainer>
			<Table className={classes.table} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell>Index</TableCell>
						<TableCell>Project Title</TableCell>
						<TableCell>Project Description</TableCell>
						<TableCell>Project Id</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{projects.map((project, index) => (
						<TableRow key={project._id}>
							<TableCell>{index + 1}</TableCell>
							<TableCell>{project.projectTitle}</TableCell>
							<TableCell>{project.projectDescription}</TableCell>
							<TableCell>{project._id}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default Table;
