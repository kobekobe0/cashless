import Card from "@/components/reusables/cardContainer/card";
import { PrimaryLabel, SecondaryContent } from "@/components/reusables/typography/Typography";

export const Table = ({transactions}) => {
    return (
        <Card className="bg-white shadow-xl rounded-md p-8 w-full border-2 border-gray-200">
            <PrimaryLabel className="text-lg font-semibold font-roboto mb-2 text-center">Transaction and Payment Details</PrimaryLabel>
            <hr className="h-1 my-4 bg-gray-300 border-0 dark:bg-gray-700 mb-12" />

            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    {/* Table Head */}
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="p-3 font-normal text-gray-700">
                                <PrimaryLabel>Registry of Deeds</PrimaryLabel>
                            </th>
                            <th className="p-3 font-normal text-gray-700">EPEB Number/s</th>
                            <th className="p-3 font-normal text-gray-700">LRA Fee</th>
                            <th className="p-3 font-normal text-gray-700">IT Services</th>
                            <th className="p-3 font-normal text-gray-700">Total Amount</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={transaction.ID} className="odd:bg-gray-200 even:bg-white hover:bg-gray-200 transition">
                            <td className="p-3">
                                <SecondaryContent>
                                    {transaction?.registryOfDeeds}
                                </SecondaryContent>
                            </td>
                            <td className="p-3">
                                {transaction?.EPEBno.map((epeb, i) => (
                                    <SecondaryContent key={i}>{epeb}</SecondaryContent>
                                ))}
                            </td>
                            <td className="p-3">
                                <SecondaryContent>
                                    {parseFloat(transaction?.lraFee).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </SecondaryContent>
                            </td>
                            <td className="p-3">
                                <SecondaryContent>
                                    {parseFloat(transaction?.itFee).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </SecondaryContent>
                            </td>
                            <td className="p-3">
                                <SecondaryContent>
                                    {parseFloat(transaction?.totalAmount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                </SecondaryContent>
                            </td>
                        </tr>

                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    )
}

export default Table;