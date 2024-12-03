import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderList from './components/OrderList';
import OrderDetail from './components/OrderDetail';
import DailyProductionReportList from './components/DailyProductionReportList';
import MonthlyProductionReportList from './components/MonthlyProductionReportList';
// import TotalOrderReportList from './components/TotalOrderReportList';
// import EmployeeDatabaseReportList from './components/EmployeeDatabaseReportList';
// import EmployeeAttendanceReportList from './components/EmployeeAttendanceReportList';
import ReportDetail from './components/ReportDetail';
import ReportForm from './components/ReportForm';
import InquiryList from './components/InquiryList';
import InquiryDetail from './components/InquiryDetail';
import InquiryForm from './components/InquiryForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';
import EmployeeForm from './components/EmployeeForm';
import OwnCostingList from './components/OwnCostingList';
import SupplierCostingList from './components/SupplierCostingList';
import Summary from './components/Summary';
import SampleFollowUpList from './components/SampleFollowUpList';
import SampleFollowUpDetail from './components/SampleFollowUpDetail';
import SampleCommentList from './components/SampleCommentList';
import SampleCommentDetail from './components/SampleCommentDetail';
import ReminderList from './components/ReminderList';
import ReminderDetail from './components/ReminderDetail';
import Header from './components/Header';
import InquiryListstutas from './components/InquiryListstutas';
import InquiryDetailstutas from './components/InquiryDetailstutas';
import InquiryFilter from './components/InquiryFilter';
import TotalInquiryList from './components/TotalInquiryList';
import TotalInquiryDetail from './components/TotalInquiryDetail';



const App = () => {
  return (
    <Router>
      <nav>
          <ul>
            <li><a href="/daily-production">Daily Production Reports</a></li>
            <li><a href="/monthly-production">Monthly Production Reports</a></li>
            <li><a href="/total-order">Total Order Reports</a></li>
            <li><a href="/employee-database">Employee Database Reports</a></li>
            <li><a href="/employee-attendance">Employee Attendance Reports</a></li>
          </ul>
        </nav>
      <Routes>
        <Route path="/order" element={<OrderList />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
        <Route path="/Own-Costing" element={<OwnCostingList />} />
        <Route path="/supplier-costing" element={<SupplierCostingList />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/employee" element={<EmployeeList />} />
        <Route path="/employees/:id" element={<EmployeeDetail />} />
        <Route path="/add-employee" element={<EmployeeForm />} />
        <Route path="/inquiry" element={<InquiryList />} />
        <Route path="/inquiries/:id" element={<InquiryDetail />} />
        <Route path="/add-inquiry" element={<InquiryForm />} />
        <Route path="/daily-production" element={<DailyProductionReportList />} />
        <Route path="/monthly-production" element={<MonthlyProductionReportList />} />
        <Route path="/total-order" element={<TotalOrderReportList />} />
        <Route path="/employee-database" element={<EmployeeDatabaseReportList />} />
        <Route path="/employee-attendance" element={<EmployeeAttendanceReportList />} />
        <Route path="/report/:id" element={<ReportDetail />} />
        <Route path="/create-report" element={<ReportForm />} />
        <Route path="/sample-follow-up" element={<SampleFollowUpList />} />
        <Route path="/sample-follow-ups" element={<SampleFollowUpList />} />
        <Route path="/sample-follow-ups/:id" element={<SampleFollowUpDetail />} />
        <Route path="/sample-comments" element={<SampleCommentList />} />
        <Route path="/sample-comments/:id" element={<SampleCommentDetail />} />
        <Route path="/reminders" element={<ReminderList />} />
        <Route path="/reminders/:id" element={<ReminderDetail />} />
        <Route path="/inquiriesstutas/:id" element={<InquiryDetail />} />
        <Route path="/inquiries/confirmed" element={<InquiryList status="confirmed" />} />
        <Route path="/inquiries/pending" element={<InquiryList status="pending" />} />
        <Route path="/total-inquirie" element={<TotalInquiryList />} />
        <Route path="/total-inquiries/:id" element={<TotalInquiryDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
