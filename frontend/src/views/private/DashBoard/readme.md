<!-- @format -->

views > DashBoard > index.js

This is the main layout for views/pages in the sidebar.

Layout has grid section on the left for sidebar and another grid section on the right for the views/page component

This file also fetches all the data required for all the pages to function. Data is fetched from the backend/database and saved to the redux store.

File also contains the ternary script which assess which view/page was clicked on in the sidebar. Once the sidebar is clicked, the listitem component sends the clicked page request to the redux store as {component: value}
