import React from 'react'
import { Button, Col, Form, Modal, Row, Table } from 'react-bootstrap';

function RolesPermissions() {
  return (
    <div><Table striped responsive bordered hover size="lg">
    <thead>
      <tr>
        <th>Module Permission</th>
        <th>Read</th>
        <th>Write</th>
        <th>Create</th>
        <th>Delete</th>
        <th>Import</th>
        <th>Export</th>                
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Holidays</td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} >
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
      </tr>
      <tr>
        <td>Leaves</td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
      </tr>
      <tr>
        <td>Clients</td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>

      </tr>
      <tr>
        <td>Projects</td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>

      </tr>
      <tr>
        <td>Tasks</td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
      </tr>
      <tr>
        <td>Chats</td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
      </tr>
      <tr>
        <td>Assets</td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}

                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}

                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}

                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}

                />
              </div>
            ))}
          </Form>
        </td>

      </tr>
      <tr>
        <td>Timing Sheets</td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}

                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}

                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}

                />
             </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}

                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}

                />
              </div>
            ))}
          </Form>
        </td>
        <td>
          <Form>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}

                />
              </div>
            ))}
          </Form>
        </td>

      </tr>
    </tbody>
  </Table>
</div>
  )
}

export default RolesPermissions