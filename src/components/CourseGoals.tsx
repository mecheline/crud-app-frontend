import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { removeGoal } from "../features/CourseSlice";

type editHandlerProps = {
  editHandler: (id: number) => void;
};

const CourseGoals = ({ editHandler }: editHandlerProps) => {
  const dispatch = useDispatch();
  const rows = useSelector((state: RootState) => state.root.course.courses);
  console.log(rows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    console.log(event);
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteHandler = (id: number) => {
    console.log(id);
    dispatch(removeGoal(id));
  };
  const editHandlerFunc = (id: number) => {
    editHandler(id);
  };

  // const headerData = ["ID", "Title", "Description", "Category", "Actions"]
  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      {rows.length > 0 ? (
        <Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="left">Title</TableCell>
                  <TableCell align="left">Description</TableCell>
                  <TableCell align="left">Category</TableCell>
                  <TableCell align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="left">{row.title}</TableCell>
                    <TableCell align="left">{row.description}</TableCell>
                    <TableCell align="left">{row.category}</TableCell>
                    <TableCell align="left">
                      <Button
                        sx={{ color: "#6C5DD3" }}
                        onClick={() => editHandlerFunc(row.id)}
                      >
                        Edit
                      </Button>
                      <Button
                        sx={{ color: "#6C5DD3" }}
                        onClick={() => deleteHandler(row.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      ) : (
        <Typography
          variant="h4"
          component={"h4"}
          sx={{
            textAlign: "center",
            my: 4,
            fontWeight: 700,
            fontSize: "15px",
            lineHeight: "22px",
            letterSpacing: "-0.1px",
          }}
        >
          No data to display, Please add a course
        </Typography>
      )}
    </Paper>
  );
};

export default CourseGoals;
