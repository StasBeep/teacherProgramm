import Plot from 'react-plotly.js';

const Plotly3d = () => {


    return <Plot
        data={[
            {
                x: [3, 2, 4, 4, 5],
                y: [5, 2, 3, 4, 5],
                z: [7, 2, 5, 4, 5],
                type: 'mesh3d',
            }
        ]}
        layout={{ width: 600, height: 600, title: 'A Fancy Plot' }}
    />
}

export default Plotly3d;