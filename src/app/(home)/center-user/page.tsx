'use client'
import React, { useState } from "react";
import DataTable from "@/components/DynamicTable";
import { useListCenterUsersQuery } from "@/store/ApiSlice";
import SearchField from "@/components/SearchField";

const CenterUser: React.FC = () => {
  const [searchTerm, setSearchTerm]=useState("");
  const { data, error, isLoading } = useListCenterUsersQuery({
    limit: 10,
    page: 0,
    search_string: "",
    is_active: true,
    add_super_admin: false,
  });
  const filteredData = data?.data?.listCenterUsers?.listUsers?.filter((item) => {
    return Object.values(item).some((field) => {
      if (typeof field === 'string') {
        return field.toLowerCase().includes(searchTerm.toLowerCase()) && field.toLowerCase().startsWith(searchTerm.toLowerCase());
      } else if (typeof field === 'number') {
        return field.toString().startsWith(searchTerm);
      }
      return false;
    });
  });
  
  
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  let formattedData = [];
  let tableColumns = [];
  let actions = [];
  console.log(data.data.listCenterUsers.listUsers)
  if (data.data && data.data.listCenterUsers && data.data.listCenterUsers.listUsers) {
    formattedData = data.data.listCenterUsers.listUsers;
    tableColumns = [
      { title: "ID", field: "id" },
      { title: "First Name", field: "first_name" },
      { title: "Last Name", field: "last_name" },
      { title: "Email", field: "email" },
      { title: "User Type", field: "user_type_name" },
      // Add more columns as needed
    ];

    const handleEdit = (id: number) => {
      // Implement edit action
      console.log("Edit ID:", id);
    };

    const handleDelete = (id: number) => {
      // Implement delete action
      console.log("Delete ID:", id);
    };

    actions = [
      { label: "Edit", onClick: handleEdit },
      { label: "Delete", onClick: handleDelete },
      // { label: "Additional Action", onClick: handleAdditionalAction },
      // Add more action objects as needed
    ];
  }

  return (
    <div>
      <h1>Data Table</h1>
      <SearchField value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} data={filteredData} />   
        <DataTable
        data={filteredData}
        actions={actions}
        tableColumns={tableColumns}
      />
    </div>
  );
};

export default CenterUser;
