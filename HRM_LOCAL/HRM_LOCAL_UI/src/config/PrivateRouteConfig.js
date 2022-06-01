//Default Component Imports
import {
  FcBusinessman,
  FcSurvey,
  FcDataSheet,
  FcDepartment,
  FcTimeline,
  FcOvertime,
  FcManager,
  FcReading,
  FcSportsMode,
  FcCollaboration,
  FcConferenceCall,
  FcCalendar,
  FcLeave,
  FcMultipleInputs,
  FcNeutralTrading,
  FcAdvance,
} from "react-icons/fc";

//Data Imports
import Roles from "./Roles";

//Custom Component Imports
import MyProfileMain from "../pages/MyProfile/MyProfileMain";
import EmployeeMaster from "../pages/EmployeeMaster/EmployeeMasterMain";
import HolidayManagementMain from "../pages/HolidayManagement/HolidayManagementMain";
import EmployeeOnboardingFormMain from "../pages/EmployeeOnboardingForm/EmployeeOnboardingFormMain";
import OfferApprovalMain from "../pages/OfferApprovals/OfferApprovalMain";
import DepartmentMain from "../pages/Departments/DepartmentMain";
import DesignationMain from "../pages/Designation/DesignationMain";
import LeaveToApply from "../pages/LeaveManagement/LeaveToApply";
import LeaveToApprove from "../pages/LeaveManagement/LeaveToApprove";
import ApprovalMain from "../pages/Approvals/ApprovalMain";
import Employee from "../pages/AllEmployees/AllEmployeesMain";

export default [
  {
    component: MyProfileMain,
    path: "/",
    icon: <FcSportsMode />,
    title: "My Profile",
    permission: [
      Roles.employee,
      Roles.hr,
      Roles.ceo,
      Roles.it,
      Roles.taa,
      Roles.hradmin,
    ],
    exact: true,
  },
  {
    component: EmployeeMaster,
    path: "/employeeProfile",
    icon: <FcManager />,
    title: "Edit My Profile",
    permission: [
      Roles.employee,
      Roles.hr,
      Roles.ceo,
      Roles.it,
      Roles.taa,
      Roles.hradmin,
    ],
  },
  {
    component: Employee,
    path: "/allEmployees",
    icon: <FcManager />,
    title: "All Employees",
    permission: [Roles.hradmin],
  },
  {
    component: HolidayManagementMain,
    path: "/holidayManagenent",
    icon: <FcCalendar />,
    title: "Holiday Management",
    permission: [Roles.hradmin],
  },
  {
    component: EmployeeOnboardingFormMain,
    path: "/onboardingForm",
    icon: <FcReading />,
    title: "Onboarding Form",
    permission: [Roles.taa],
  },
  {
    component: OfferApprovalMain,
    path: "/offerApprovalMain",
    icon: <FcNeutralTrading />,
    title: "Offer Approvals",
    permission: [Roles.hradmin, Roles.hr],
  },
  // {
  //   component: ApprovalMain,
  //   path: "/Approvals",
  //   icon: <FcCalendar />,
  //   title: "Approvals",
  //   permission: [Roles.taa],
  // },
  {
    component: DepartmentMain,
    path: "/departmentMain",
    icon: <FcDepartment />,
    title: "Departments",
    permission: [Roles.hradmin],
  },
  {
    component: DesignationMain,
    path: "/designationMain",
    icon: <FcTimeline />,
    title: "Designations",
    permission: [Roles.hradmin],
  },
  {
    component: LeaveToApply,
    path: "/leaveApply",
    icon: <FcManager />,
    title: "Leaves To Apply",
    permission: [
      Roles.employee,
      Roles.hr,
      Roles.ceo,
      Roles.it,
      Roles.taa,
      Roles.hradmin,
    ],
  },
];
// testing purpose
