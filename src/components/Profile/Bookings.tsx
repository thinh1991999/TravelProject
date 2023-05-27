import React, { useEffect, useState } from "react";
import { Column, useTable } from "react-table";
import LoadingSpinner from "../LoadingSpinner";
import { useAppSelector } from "../../store/hook";
import httpService from "../../services/httpService";
import { Booking } from "../../interfaces/global";
import { getTime } from "../../share/ultils";
import { RoomDetail } from "../../interfaces/detail";

const Table = ({
  columns,
  data,
}: {
  columns: Column<Booking>[];
  data: Booking[];
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });
  return (
    <table {...getTableProps()} className="border w-full">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                className="p-2 border-b border-r text-center"
                {...column.getHeaderProps()}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                const id = cell.column.id;
                const getValue = () => {
                  if (
                    id === "checkIn" ||
                    id === "checkOut" ||
                    id === "createdAt"
                  ) {
                    return <span>{getTime(cell.value)}</span>;
                  } else if (id === "room") {
                    const info = cell.value as RoomDetail;
                    const { images, name, location } = info;
                    return (
                      <div className="flex items-center p-2">
                        <img
                          src={images[0].publicUrl}
                          alt=""
                          className="w-[80px] h-[80px] rounded-md"
                        />
                        <div className="flex flex-col ml-2">
                          <span className="font-bold one-line-max">{name}</span>
                          <span className="one-line-max">
                            {location.address}
                          </span>
                        </div>
                      </div>
                    );
                  } else if (id === "status") {
                    const getColor = () => {
                      switch (cell.value) {
                        case "DONE":
                          return "text-blue-500";
                        case "PAY_FULL":
                          return "text-green-500";
                        case "REJECT":
                          return "text-red-500";
                        default:
                          break;
                      }
                    };
                    return (
                      <span className={`font-bold ${getColor()}`}>
                        {cell.render("Cell")}
                      </span>
                    );
                  } else if (id === "changeStatus") {
                    return (
                      <div className="flex justify-center">
                        <button className="btn ">Cancer</button>
                      </div>
                    );
                  } else {
                    return <span>{cell.render("Cell")}</span>;
                  }
                };

                return (
                  <td
                    className="p-2 border-b border-r text-center max-w-[150px]"
                    {...cell.getCellProps()}
                  >
                    {getValue()}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const Bookings = () => {
  const token = useAppSelector((state) => state.global.token);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Booking[]>([]);
  const [isReset, setIsReset] = useState(true);
  const columns = React.useMemo(
    () => [
      {
        Header: "Room",
        columns: [
          {
            Header: "Room Information",
            accessor: "room",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Check In",
            accessor: "checkIn",
          },
          {
            Header: "Check Out",
            accessor: "checkOut",
          },
          {
            Header: "Created Date",
            accessor: "createdAt",
          },
          {
            Header: "Status",
            accessor: "status",
          },
        ],
      },
    ],
    []
  );
  useEffect(() => {
    if (!token) return;
    if (!isReset) return;
    setLoading(true);
    httpService
      .getBookings(token)
      .then((res) => {
        setData(res.data.bookings);
        setLoading(false);
        setIsReset(false);
      })
      .catch(() => {
        setData([]);
        setLoading(false);
        setIsReset(false);
      });
  }, [token, isReset]);

  return (
    <div className="overflow-x-auto">
      <div className="my-5 min-w-[1280px] ">
        <div className="flex items-center mb-5">
          <h3 className="mr-5">Your Bookings</h3>
          <button className="btn btn-primary" onClick={() => setIsReset(true)}>
            Reset
          </button>
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <LoadingSpinner />
          </div>
        ) : (
          <Table columns={columns} data={data} />
        )}
      </div>
    </div>
  );
};

export default Bookings;
