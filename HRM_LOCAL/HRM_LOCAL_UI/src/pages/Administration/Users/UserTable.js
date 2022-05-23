import React from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserTable() {
  return (
    <div>
      <Container>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Created Date</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Revanth </td>
              <td>revanth@gmail.com</td>
              <td>Arshaa Technologies</td>
              <td>09-09-2021</td>
              <td>Manager</td>
              <td>
                {/* <Link className="btn btn-warning mr-1" >
                  <i class="bi bi-pencil-square"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    />
                  </svg>
                </Link>
              </td>
              <td>
                {" "}
                <Link
                  class="btn btn-outline-primary"
                  // onClick={() => deleteUser(user.id)}
                >
                  <i class="bi bi-trash-fill"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                  </svg>
                </Link> */}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Divya </td>
              <td>divya@gmail.com</td>
              <td>Arshaa Technologies</td>
              <td>09-09-2021</td>
              <td>employee</td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sai Ram </td>
              <td>sai@gmail.com</td>
              <td>Arshaa Technologies</td>
              <td>09-09-2021</td>
              <td>employee</td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Anusha </td>
              <td>anusha@gmail.com</td>
              <td>Arshaa Technologies</td>
              <td>09-09-2021</td>
              <td>employee</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default UserTable;
