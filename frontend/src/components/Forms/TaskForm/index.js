import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { Grid } from "@mui/material";
import { ptBR } from "date-fns/esm/locale";

export default function TaskForm(props) {
	const { task, handleChange } = props;

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						autoFocus
						margin="dense"
						id="title"
						label="Título da tarefa"
						value={task.title}
						type="name"
						fullWidth
						onChange={(e) => handleChange("title", e.target.value)}
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						autoFocus
						margin="dense"
						id="description"
						label="Descrição"
						value={task.description}
						type="description"
						fullWidth
						variant="outlined"
						multiline
						rows={2}
						onChange={(e) => handleChange("description", e.target.value)}
					/>
				</Grid>
				<Grid item xs={6}>
					<DateTimePicker
						id="startDate"
						label="Início"
						value={task.startDate}
						fullWidth
						onChange={(newValue) => handleChange("startDate", newValue)}
						renderInput={(params) => <TextField {...params} />}
					/>
				</Grid>
				<Grid item xs={6}>
					<DateTimePicker
						id="endDate"
						label="Término"
						value={task.endDate}
						fullWidth
						onChange={(newValue, e) => handleChange("endDate", newValue)}
						renderInput={(params) => <TextField {...params} />}
					/>
				</Grid>
			</Grid>
		</LocalizationProvider>
	);
}
