import React, { useState, useContext } from "react";
import styled from "styled-components";
import {
  Delete as DeleteIcon,
  DeleteForever as DeleteForeverIcon,
  Restore as RestoreIcon,
} from "@material-ui/icons";

import { ApptContext } from "../App";
import { AdminContext } from ".";

const ApptContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  border: none;
  background: none;
`;

const ApptTitle = styled.span`
  color: var(--grey);
`;

const ApptDate = styled.span`
  color: var(--pink);
  font-style: italic;
  font-size: 0.8rem;
`;

const AdminAppt = ({ appt }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { deleteAppointment } = useContext(ApptContext);
  const { token } = useContext(AdminContext);

  const handleDelete = async (id) => {
    deleteAppointment(id, token);
  };

  return (
    <ApptContainer>
      <ApptTitle>{appt.title}</ApptTitle>
      <ApptDate>
        {new Date(appt.datetime).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "2-digit",
          hour: "numeric",
          minute: "numeric",
        })}
      </ApptDate>
      {showConfirm ? (
        <div>
          <Button onClick={() => handleDelete(appt.ID)}>
            <DeleteForeverIcon style={{ color: "var(--navy)" }} />
          </Button>
          <Button onClick={() => setShowConfirm(false)}>
            <RestoreIcon style={{ color: "var(--navy)" }} />
          </Button>
        </div>
      ) : (
        <Button onClick={() => setShowConfirm(true)}>
          <DeleteIcon style={{ color: "var(--navy)" }} />
        </Button>
      )}
    </ApptContainer>
  );
};

export default AdminAppt;
