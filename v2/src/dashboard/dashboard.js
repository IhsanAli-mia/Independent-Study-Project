// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../index.css";
// import "./dashboard.css";
// import {
//     Box,
//     List,
//     ListItem,
//     ListItemText,
//     Typography,
//     useTheme,
//   } from "@mui/material";

// const Dashboard = () => {
//   return (
//     <div className="dashboardMain">
//       <nav className="navbar navbar-expand-lg navbar-light ">
//         <ul className="navbar-nav d-flex flex-column">
//           <li className="nav-item">
//             <a className="nav-link" href="/dashboard">
//               Dashboard
//             </a>
//           </li>
//           <li className="nav-item">
//             <a
//               className="nav-link"
//               target="_blank"
//               href="https://docs.google.com/forms/d/e/1FAIpQLSfPn1hyLZe9tfC8KfdicjaNDEuiyPm9Fw_-keaVZSh91YzdtA/viewform"
//             >
//               Apply Now!
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Requests
//             </a>
//           </li>
//         </ul>
//       </nav>
//       <Box m="20px">
//       <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

//       <Box display="flex" justifyContent="space-between">
//         {/* CALENDAR SIDEBAR */}
//         <Box
//           flex="1 1 20%"
//           backgroundColor={colors.primary[400]}
//           p="15px"
//           borderRadius="4px"
//         >
//           <Typography variant="h5">Events</Typography>
//           <List>
//             {currentEvents.map((event) => (
//               <ListItem
//                 key={event.id}
//                 sx={{
//                   backgroundColor: colors.greenAccent[500],
//                   margin: "10px 0",
//                   borderRadius: "2px",
//                 }}
//               >
//                 <ListItemText
//                   primary={event.title}
//                   secondary={
//                     <Typography>
//                       {formatDate(event.start, {
//                         year: "numeric",
//                         month: "short",
//                         day: "numeric",
//                       })}
//                     </Typography>
//                   }
//                 />
//               </ListItem>
//             ))}
//           </List>
//         </Box>

//         {/* CALENDAR */}
//         <Box flex="1 1 100%" ml="15px">
//           <FullCalendar
//             height="75vh"
//             plugins={[
//               dayGridPlugin,
//               timeGridPlugin,
//               interactionPlugin,
//               listPlugin,
//             ]}
//             headerToolbar={{
//               left: "prev,next today",
//               center: "title",
//               right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
//             }}
//             initialView="dayGridMonth"
//             editable={true}
//             selectable={true}
//             selectMirror={true}
//             dayMaxEvents={true}
//             select={handleDateClick}
//             eventClick={handleEventClick}
//             eventsSet={(events) => setCurrentEvents(events)}
//             initialEvents={[
//               {
//                 id: "12315",
//                 title: "All-day event",
//                 date: "2022-09-14",
//               },
//               {
//                 id: "5123",
//                 title: "Timed event",
//                 date: "2022-09-28",
//               },
//             ]}
//           />
//         </Box>
//       </Box>
//     </Box>
//     </div>
//   );
// };

// export default Dashboard;
