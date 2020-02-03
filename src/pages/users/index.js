import React from "react";
import { Card, Table } from "antd";
import { Typography, Icon, Button, Input } from "antd";
import Highlighter from "react-highlight-words";

import { Link } from "react-router-dom";
const { Title, Paragraph } = Typography;
export default class Users extends React.Component {
  state = {
    uesrs: [],
    pagination: {
      total: 100
    },
    loading: false,
    searchText: "",
    searchedColumn: ""
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon="search"
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <Icon type="search" style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    }
    // render: text =>
    //   this.state.searchedColumn === dataIndex ? (
    //     <Highlighter
    //       highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
    //       searchWords={[this.state.searchText]}
    //       autoEscape
    //       textToHighlight={text.toString()}
    //     />
    //   ) : (
    //     text
    //   )
  });
  columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      ...this.getColumnSearchProps("name"),
      render: (text, row) => <Link to={`/users/${row.id}`}>{text}</Link>
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "age"
    },
    {
      title: "street",
      dataIndex: "address",
      key: "address",
      render: address => address.street
    },
    {
      title: "city",
      dataIndex: "address",
      key: "city",
      render: address => address.city
    },
    {
      title: "zipcode",
      dataIndex: "address",
      key: "zipcode",
      render: address => address.zipcode
    }
  ];

  toggle = () => {
    this.setState(state => ({ loading: !state.loading }));
  };
  componentDidMount() {
    this.toggle();
    this.fetch({
      url: "https://jsonplaceholder.typicode.com/users",
      params: {
        _page: 1,
        _limit: 6
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ users: data }))
      .finally(() => this.toggle());
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.toggle();
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager
    });
    this.fetch({
      url: "https://jsonplaceholder.typicode.com/users",
      params: {
        _page: pagination.current,
        _limit: 6,
        ...filters
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ users: data }))
      .finally(() => this.toggle());
  };

  fetch = ({ url, params }) => {
    if (!url) return;
    url = new URL(url);
    url.search = new URLSearchParams({
      ...params
    });
    return fetch(url);
  };

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    const { users, loading, pagination } = this.state;

    return (
      <>
        <Title level={1}>users</Title>

        <Card style={{ width: "#fff", minHeight: 500 }}>
          <div style={{ overflowX: "auto" }}>
            {
              <Table
                dataSource={users}
                columns={this.columns}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
              />
            }
          </div>
        </Card>
      </>
    );
  }
}
