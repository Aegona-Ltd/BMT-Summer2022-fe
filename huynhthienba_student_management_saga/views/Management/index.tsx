"use client";

import { Pen, Recybin } from "@/components/Icons";
import ConfirmDelete from "@/components/Management/ConfirmDelete";
import Loading from "@/components/Management/Loading";
import Popup from "@/components/Popup";
import { formatDate } from "@/configs/common";
import {
  deleteStudentAction,
  getAllStudentAction,
} from "@/redux/features/management/action";
import { selectStudent } from "@/redux/features/management/reducer";
import { StudentType, studentDefault } from "@/redux/features/management/type";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlusIcon from "@/public/icons/plus.svg";
import Image from "next/image";
import Form from "@/components/Management/Form";

const ManagementView = () => {
  const [popupMode, setPopupMode] = useState<"add" | "edit">("add");
  const [showPopupConfirm, setShowPopupConfirm] = useState<boolean>(false);
  const [showPopupForm, setShowPopupForm] = useState<boolean>(false);
  const [deleteStudentId, setDeleteStudentId] = useState<string>("");
  const [studentEdit, setStudentEdit] = useState<StudentType>();
  const { students, isLoading } = useSelector(selectStudent);
  const dispatch = useDispatch();

  const handleDeleteStudent = (studentId: string) => {
    setDeleteStudentId(studentId);
    handleShowPopupConfirm();
  };

  const handleConfirmedDelete = () => {
    dispatch(deleteStudentAction(deleteStudentId));
    handleClosePopupConfirm();
  };

  const handleClosePopupConfirm = () => setShowPopupConfirm(false);
  const handleShowPopupConfirm = () => setShowPopupConfirm(true);
  const handleClosePopupForm = () => setShowPopupForm(false);

  const handleClickAddButton = () => {
    setShowPopupForm(true);
    setPopupMode("add");
    setStudentEdit(studentDefault);
  };

  const handleClickEditButton = (student: StudentType) => {
    setStudentEdit(student);
    setShowPopupForm(true);
    setPopupMode("edit");
  };

  const renderStudentList = () =>
    students.map((student: StudentType) => (
      <tr key={student.id}>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
            {student.id}
          </p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
            {student.firstname}
          </p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
            {student.lastname}
          </p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
            {formatDate(student.birth_day)}
          </p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
            {student.address}
          </p>
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
            {formatDate(student.graduation_year)}
          </p>
        </td>
        <td className="p-4 border-b border-blue-gray-50 right-0 sticky lg:relative bg-light-200">
          <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 active:bg-blue-gray-500/30 hover:scale-125 transition-all duration-200"
            type="button"
            onClick={() => handleClickEditButton(student)}
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <Pen />
            </span>
          </button>
          <button
            className="relative align-middle select-none font-sans font-medium text-center uppercase disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-blue-gray-500 active:bg-blue-gray-500/30 hover:scale-125 transition-all duration-200"
            type="button"
            onClick={() => handleDeleteStudent(student.id)}
          >
            <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <Recybin />
            </span>
          </button>
        </td>
      </tr>
    ));

  useEffect(() => {
    dispatch(getAllStudentAction());
  }, []);

  return (
    <>
      <div className="container mx-auto lg:px-6 my-5 overflow-x-auto">
        <div className="flex items-center justify-between flex-wrap gap-10 px-2">
          <h2 className="text-xl text-center lg:text-left">
            Students Management
          </h2>
          <div
            className="group cursor-pointer flex items-center gap-2"
            onClick={handleClickAddButton}
          >
            <Image
              className="group-hover:scale-110 transition-all duration-200 "
              src={PlusIcon}
              width={30}
              height={30}
              alt="plus-icon"
            />
            <span>new student</span>
          </div>
        </div>
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Id
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Firstname
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Lastname
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Birthday
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Address
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Graduation year
                </p>
              </th>
              <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50 sticky right-0 lg:relative bg-light-200 shadow-lg">
                <p className="antialiased font-sans text-sm text-blue-gray-900 flex items-center justify-between gap-2 font-normal leading-none opacity-70">
                  Actions
                </p>
              </th>
            </tr>
          </thead>
          <tbody>{isLoading ? <Loading /> : renderStudentList()}</tbody>
        </table>
      </div>
      <Popup
        title=""
        className="w-full md:w-1/3 mx-2"
        open={showPopupConfirm}
        setClose={handleClosePopupConfirm}
      >
        <ConfirmDelete
          handleClose={handleClosePopupConfirm}
          handleConfirm={handleConfirmedDelete}
        />
      </Popup>

      <Popup
        title={`${popupMode} student`}
        className="w-full lg:w-1/2 mx-2"
        open={showPopupForm}
        setClose={handleClosePopupForm}
      >
        <Form
          mode={popupMode}
          data={studentEdit}
          closePopup={handleClosePopupForm}
        />
      </Popup>
    </>
  );
};

export default ManagementView;
