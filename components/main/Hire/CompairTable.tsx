
'use client';

const data = {
    heading: [
        "Factors",
        "Optimal Virtual Employee",
        "In-house",
        "Freelancer",
    ],
    badge: 'BEST VALUE',
    rows:[
            [
                "Time to get right developers",
                "1 day – 2 weeks",
                "4 – 12 weeks",
                "1 – 12 weeks",
            ],
            [
                "Time to start a project",
                "1 day – 2 weeks",
                "2 – 10 weeks",
                "1 – 10 weeks",
            ],
            [
                "Project failure risk",
                "Extremely low (98% success ratio)",
                "Low",
                "Very High",
            ],
            [
                "Pricing (weekly average)",
                "1.5X",
                "2X",
                "1X",
            ],
            [
                "Dedicated resources",
                "Yes",
                "Yes",
                "Some",
            ],
            [
                "Recruitment Cost",
                "Zero",
                "High",
                "Zero",
            ],
            [
                "Hardware & Infra Cost",
                "included",
                "High",
                "Self-provided",
            ],
            [
                "Dedicated Delivery Manager",
                "Included",
                "Additional resource required",
                "Not available",
            ],
            [
                "Productivity Tracking Software",
                "Zero",
                "Extra license costs",
                "Usually none",
            ]
        ]
};

const CTable = ({PriceTable}:any) =>{
    const headers = PriceTable?.rows.length > 0 ? PriceTable?.heading : data.heading;
    const rowsdata = PriceTable?.rows.length > 0 ? PriceTable?.rows : data.rows;
    return (
        <>
            <section className="z-20 pb-12 dark:py-12 text-white flex flex-col items-center gap-6 relative px-4 py-2 sm:px-6 lg:px-8 mx-auto">
                <h2 className="text-[42px] font-bold"><span dangerouslySetInnerHTML={{ __html: PriceTable?.title ? PriceTable?.title : 'Still Wasting Weeks Recruiting Hire Full-Stack Developer ?' }}/></h2>
                <p className="text-[16px]"><span dangerouslySetInnerHTML={{__html:PriceTable?.subtitle ? PriceTable?.subtitle : 'Skip the hiring mess. Get top-tier python talent from us under 48 hours'}}/></p>
                <div className="overflow-x-hidden w-full table-auto">
                    <div className="overflow-x-auto bg-gray-900 text-white p-6 rounded-lg shadow">
                        <table className="min-w-[900px] w-full table-auto border-collapse">
                            <thead>
                            <tr>
                                {headers.map((header:string, index:number) => (
                                    header !== null && 
                                    <th
                                        key={index}
                                        className={`py-4 px-6 text-left text-lg font-bold ${
                                        index === 0
                                        ? 'text-white relative border-gray-800 bg-gray-700 rounded-t-md'
                                        :
                                        index === 1 ? 'bg-oveblue text-white border-blue-700 rounded-t-lg relative' : 'border-x rounded-t-lg relative bg-gray-700 border-gray-800'
                                        }`}
                                    >
                                        {index === 1 && (
                                        <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-xs px-2 py-1 rounded-full text-white font-semibold">
                                            {data.badge}
                                        </span>
                                        )}
                                        {header}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody>
                            {rowsdata.map((row:any, idx:number) => (
                                <tr key={idx} className="border-t">
                                    {row.map((colValue:string, i:number) => (
                                        colValue !== null &&
                                        <td
                                        key={i}
                                        className={`py-4 px-6 align-top text-sm whitespace-pre-line ${
                                            i === 0
                                            ? ' font-semibold border-s border-b border-gray-700'
                                            : i === 1
                                            ? 'text-md border-x-2 border-oveblue border-b font-bold'
                                            : 'border-x border-b border-gray-700'
                                        }`}
                                        >
                                        {colValue}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    );
}
export default CTable;