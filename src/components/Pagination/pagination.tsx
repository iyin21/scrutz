import { Pagination } from "@mantine/core"

interface IPaginateProps {
    page: number
    total: number
    onChange?: (page: number) => void
    boundaries: number
    recordPerpage: number
    totalRecords: number
    count: number
}

const Paginate = ({
    page,
    onChange,
    total,
    boundaries,
    recordPerpage,
    totalRecords,
    count,
}: IPaginateProps) => {
    return (
        <div className=" grid-cols-2 flex justify-between lg:mt-12 col-span-full">
           
            {total > 0 && (
                <div className="col-span">
                    <Pagination
                        boundaries={boundaries}
                        value={page}
                        onChange={onChange}
                        size="md"
                        //spacing="sm"
                        total={total}
                        color="#247B7B"
                        data-testid="paginate"
                        className="gap-0.5 md:gap-2"
                        radius="lg"
                        
                    />
                </div>
            )}
             <div>
                <p className="text-black-100 text-2md text-md">
                    <span className="hidden md:inline-block font-semibold ">
                        Showing Results:
                    </span>
                    {count === 1 ? (
                        <span> {totalRecords}</span>
                    ) : (
                        <span>
                            {" "}
                            {recordPerpage > totalRecords
                                ? 1
                                // : page === total
                                // ? totalRecords + 1 - recordPerpage
                                : (page - 1) * recordPerpage + 1}
                            -
                            {page === total
                                ? totalRecords
                                : recordPerpage * page}{" "}
                        </span>
                    )}{" "}
                    of {totalRecords} entries
                </p>
            </div>
        </div>
    )
}

export default Paginate
