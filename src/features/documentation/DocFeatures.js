import { useEffect, useState } from "react";
import TitleCard from "../../components/Cards/TitleCard";
import { setPageTitle, showNotification } from "../common/headerSlice";
import GettingStartedNav from "./components/GettingStartedNav";
import ReadMe from "./components/GettingStartedContent";
import GettingStartedContent from "./components/GettingStartedContent";
import FeaturesNav from "./components/FeaturesNav";
import FeaturesContent from "./components/FeaturesContent";

import moment from "moment";
import { openModal } from "../common/modalSlice";
import {
  CONFIRMATION_MODAL_CLOSE_TYPES,
  MODAL_BODY_TYPES,
} from "../../utils/globalConstantUtil";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";
import { useDispatch, useSelector } from "react-redux";

const TopSideButtons = () => {
  const dispatch = useDispatch();

  const openAddNewLeadModal = () => {
    dispatch(
      openModal({
        title: "Nuevo servicio",
        bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW,
      })
    );
  };

  return (
    <div className="inline-block float-right">
      <button
        className="btn px-6 btn-sm normal-case btn-primary"
        onClick={() => openAddNewLeadModal()}
      >
        Add New
      </button>
    </div>
  );
};

function Features() {

  const { leads } = useSelector((state) => state.lead);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Documentation" }));
  }, []);

  const getDummyStatus = (index) => {
    if (index % 5 === 0) return <div className="badge">Not Interested</div>;
    else if (index % 5 === 1)
      return <div className="badge badge-primary">In Progress</div>;
    else if (index % 5 === 2)
      return <div className="badge badge-secondary">Sold</div>;
    else if (index % 5 === 3)
      return <div className="badge badge-accent">Need Followup</div>;
    else return <div className="badge badge-ghost">Open</div>;
  };

  const deleteCurrentLead = (index) => {
    dispatch(
      openModal({
        title: "Confirmation",
        bodyType: MODAL_BODY_TYPES.CONFIRMATION,
        extraObject: {
          message: `Are you sure you want to delete this lead?`,
          type: CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE,
          index,
        },
      })
    );
  };

  return (
    <>
      

      <TitleCard
        title="Servicios"
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons />}
      >
        {/* Leads List in table format loaded from slice after api call */}
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Servicio</th>
                <th>Descripcion</th>
                <th>Fecha</th>
                <th>Status</th>
                <th>Assigned To</th>
                
              </tr>
            </thead>
            <tbody>
            <tr>
            <td>Inyecciones</td>
            <td>Inyecciones</td>
            <td>2023-08-05</td>
            <td>Programado</td>
            <td>Juan</td>
            </tr>
            <tr>
            <td>Inyecciones</td>
            <td>Inyecciones</td>
            <td>2023-08-05</td>
            <td>Programado</td>
            <td>Juan</td>
            </tr>
            <tr>
            <td>Inyecciones</td>
            <td>Inyecciones</td>
            <td>2023-08-05</td>
            <td>Programado</td>
            <td>Juan</td>
            </tr>
            <tr>
            <td>Inyecciones</td>
            <td>Inyecciones</td>
            <td>2023-08-05</td>
            <td>Programado</td>
            <td>Juan</td>
            </tr>
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
}

export default Features;
