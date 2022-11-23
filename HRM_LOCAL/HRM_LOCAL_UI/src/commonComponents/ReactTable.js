import React from 'react';
import PropTypes from 'prop-types'

const ReactTable = ({ cols, data, bordered, hoverable, striped, isDark }) => {
    return (
        <div className="table-responsive">
            <table className={`table ${bordered ? 'table-bordered' : 'table-borderless'} ${hoverable && 'table-hover'} ${striped && 'table-striped'} ${isDark && 'table-dark'}`}>
                <thead >
                    <tr>
                        {cols.map((headerItem, index) => (
                            <th key={index}>{headerItem.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            {cols.map((col, key) => (
                                <td key={key}>{col.render(item)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
//commit
ReactTable.propTypes = {
    cols: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
    bordered: PropTypes.bool,
    hoverable: PropTypes.bool,
    striped: PropTypes.bool,
    isDark: PropTypes.bool,
}

ReactTable.defaultProps = {
    bordered: true,
    hoverable: false,
    striped: false,
    isDark: false,
}

export default ReactTable;