import dynamic from 'next/dynamic';

export function Graphic(props) {
  const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
  });

  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: '#9699B0',
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: '#9699B0',
      },
      axisTicks: {
        color: '#9699B0',
      },
      categories: [
        new Date('18 Jan 2021').getTime(),
        new Date('19 Jan 2021').getTime(),
        new Date('20 Jan 2021').getTime(),
        new Date('21 Jan 2021').getTime(),
        new Date('22 Jan 2021').getTime(),
        new Date('23 Jan 2021').getTime(),
        new Date('24 Jan 2021').getTime(),
      ],
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  };

  const series = [
    {
      name: 'series1',
      data: [31, 120, 10, 28, 61, 18, 109],
    },
  ];

  return <Chart options={options} series={series} type="area" height={160} />;
}
