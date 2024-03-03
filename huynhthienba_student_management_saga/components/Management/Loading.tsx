import React from "react";

const Loading = ({ row = 10 }: { row?: number }) =>
  Array(row)
    .fill(0)
    .map((z, i) => (
      <tr key={i} className="animate-pulse">
        <td className="p-4 border-b border-blue-gray-50">
          <div className="h-4 w-full bg-gray-300 mb-6 rounded" />
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="h-4 w-full bg-gray-300 mb-6 rounded" />
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="h-4 w-full bg-gray-300 mb-6 rounded" />
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="h-4 w-full bg-gray-300 mb-6 rounded" />
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="h-4 w-full bg-gray-300 mb-6 rounded" />
        </td>
        <td className="p-4 border-b border-blue-gray-50">
          <div className="h-4 w-full bg-gray-300 mb-6 rounded" />
        </td>
        <td className="p-4 border-b border-blue-gray-50 right-0 sticky lg:relative bg-light-200">
          <div className="h-4 w-1/2 bg-gray-300 mb-6 rounded" />
        </td>
      </tr>
    ));

export default Loading;
