import { Luckiest_Guy } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { FiLink2 } from 'react-icons/fi'
const luckiest = Luckiest_Guy({ subsets: ['latin'], weight: ['400'] })

const Work = () => {
    return (
        <main className='bg-white dark:bg-slate-700 w-full h-[36rem] rounded-3xl mt-2 p-7 md:p-14 overflow-hidden overflow-y-auto lg:overflow-y-hidden hover:overflow-y-auto hover:shadow-lg duration-700'>
            <div className='flex gap-4 items-center'>
                <h1 className={`capitalize font-bold text-4xl flex items-center gap-3 ${luckiest.className}`}>Projects<span className="text-5xl"></span></h1>
                <hr className="w-[50rem]" />
            </div>

            <div className="grid lg:grid-cols-2 gap-5 mt-5">
                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <img src="/core-telecomms.png" alt="Project photo" className='rounded-lg mb-4' width={10000} height={2} />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2 hover:translate-y-1 transition duration-700 hover:-skew-x-6">
                            <FiLink2 size={22} />
                            <Link href={'https://github.com/chik0di/coretelecoms-data-platform'} target='_blank' className="font-bold text-lg">Unified Customer Experience Analytics Platform</Link>
                        </div>
                        <Link href={'https://github.com/chik0di/coretelecoms-data-platform'} target='_blank'></Link>
                    </div>

                    <p className="text-sm mb-3 text-black">
                        Architected an end-to-end customer complaint analytics platform that unified telecom complaint, interaction, and customer data into a single source of truth for churn and customer experience insights.
                    </p>
                    
                    <p className="text-sm text-black">
                            <strong>Stack:</strong> Python, PostgreSQL, Google Sheets, Terraform, AWS SSM, Amazon S3, Snowflake, dbt, Apache Airflow, Docker, Power BI
                    </p>

                    <div className="w-full flex justify-center gap-4">
                        <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                            href="https://github.com/chik0di/coretelecoms-data-platform"
                            target="_blank"
                            className="capitalize rounded-full text-sm"
                            >
                            Github
                            </Link>
                        </button>

                        <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                            href="https://github.com/chik0di/coretelecoms-data-platform"
                            target="_blank"
                            className="capitalize rounded-full text-sm"
                            >
                            Documentation
                            </Link>
                        </button>
                        </div>
                </div>


                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <Image className='rounded-lg mb-4' src={'/europafilm.jpg'} width={10000} height={1} alt='nadice' />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2 hover:translate-y-1 transition duration-700 hover:-skew-x-6">
                            <FiLink2 size={22} />
                            <Link href={'https://www.linkedin.com/pulse/cry-changed-everything-maternal-care-in-africa-0ptof'} target='_blank' className="font-bold text-lg">Database Design and Implementation for Movie Production Companies in Europe</Link>
                        </div>

                        <Link href={'https://www.linkedin.com/pulse/cry-changed-everything-maternal-care-in-africa-0ptof'} target='_blank'></Link>
                    </div>

                    <p className="text-sm mb-3 text-black">
                        Designed and delivered an end-to-end analytics database for European movie production companies, modeling complex industry relationships in SQL and surfacing financial, operational, and production insights through Power BI.
                    </p>
                    
                    <p className="text-sm text-black">
                            <strong>Stack:</strong> Python, PostgreSQL, Google Sheets, Terraform, AWS SSM, Amazon S3, Snowflake, dbt, Apache Airflow, Docker, Power BI
                    </p>

                    <div className="w-full flex justify-center gap-4">
                        <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                            href="https://github.com/chik0di/coretelecoms-data-platform"
                            target="_blank"
                            className="capitalize rounded-full text-sm"
                            >
                            Github
                            </Link>
                        </button>

                        <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                            href="https://github.com/chik0di/coretelecoms-data-platform"
                            target="_blank"
                            className="capitalize rounded-full text-sm"
                            >
                            Documentation
                            </Link>
                        </button>
                        </div>
                </div>


                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <Image className='rounded-lg mb-4' src={'/data-sync0.jpg'} width={10000} height={2} alt='nadice' />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2 hover:translate-y-1 transition duration-700 hover:-skew-x-6">
                            <FiLink2 size={22} />
                            <Link href={'https://www.linkedin.com/pulse/cry-changed-everything-maternal-care-in-africa-0ptof'} target='_blank' className="font-bold text-lg">Fully Managed Data Synchronization Pipeline</Link>
                        </div>

                        <Link href={'https://www.linkedin.com/pulse/cry-changed-everything-maternal-care-in-africa-0ptof'} target='_blank'></Link>
                    </div>

                    <p className="text-sm mb-3 text-black">
                        Built a fully containerized data synchronization pipeline using Airbyte to reliably replicate MySQL data into PostgreSQL and Snowflake, enabling consistent cross-database and cloud analytics.
                    </p>
                    
                    <p className="text-sm text-black">
                            <strong>Stack:</strong> Airbyte, Docker, MySQL, PostgreSQL, Snowflake
                    </p>

                    <div className="w-full flex justify-center gap-4">
                        <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                            href="https://github.com/chik0di/coretelecoms-data-platform"
                            target="_blank"
                            className="capitalize rounded-full text-sm"
                            >
                            Github
                            </Link>
                        </button>

                        <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                            href="https://github.com/chik0di/coretelecoms-data-platform"
                            target="_blank"
                            className="capitalize rounded-full text-sm"
                            >
                            Documentation
                            </Link>
                        </button>
                        </div>
                </div>


                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <Image className='rounded-lg mb-4' src={'/New York Times ETL Thumbnail.jpg'} width={10000} height={2} alt='nadice' />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2 hover:translate-y-1 transition duration-700 hover:-skew-x-6">
                            <FiLink2 size={22} />
                            <Link href={'https://www.linkedin.com/pulse/cry-changed-everything-maternal-care-in-africa-0ptof'} target='_blank' className="font-bold text-lg">End-to-End New York Times ELT Pipeline</Link>
                        </div>

                        <Link href={'https://www.linkedin.com/pulse/cry-changed-everything-maternal-care-in-africa-0ptof'} target='_blank'></Link>
                    </div>

                    <p className="text-sm mb-3">
                        Designed and implemented an ELT pipeline for New York Times data, orchestrating API ingestion, warehouse loading, and SQL-based transformations for analytical consumption.
                    </p>
                    
                    <p className="text-sm text-black">
                            <strong>Stack:</strong> Docker, Bash Scripting, Python, PostgreSQL, dbt, Power BI
                    </p>

                    <div className="w-full flex justify-center gap-4">
                        <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                            href="https://github.com/chik0di/coretelecoms-data-platform"
                            target="_blank"
                            className="capitalize rounded-full text-sm"
                            >
                            Github
                            </Link>
                        </button>

                        <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                            href="https://github.com/chik0di/coretelecoms-data-platform"
                            target="_blank"
                            className="capitalize rounded-full text-sm"
                            >
                            Documentation
                            </Link>
                        </button>
                        </div>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <Image className='rounded-lg mb-4' src={'/kaggle-logo-opengraph.png'} width={10000} height={2} alt='nadice' />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2 hover:translate-y-1 transition duration-700 hover:-skew-x-6">
                            <FiLink2 size={22} />
                            <Link href={'https://www.linkedin.com/pulse/cry-changed-everything-maternal-care-in-africa-0ptof'} target='_blank' className="font-bold text-lg">Kaggle Datasets Projects</Link>
                        </div>

                        <Link href={'https://www.linkedin.com/pulse/cry-changed-everything-maternal-care-in-africa-0ptof'} target='_blank'></Link>
                    </div>

                    <p className="text-sm mb-3 text-black">
                        Authored and maintained well-documented Kaggle datasets, transforming messy real-world data into structured, feature-rich assets for analytics and machine learning practitioners.
                    </p>
                    
                    <p className="text-sm text-black">
                            <strong>Stack:</strong> Python, PostgreSQL, Google Sheets, Terraform, AWS SSM, Amazon S3, Snowflake, dbt, Apache Airflow, Docker, Power BI
                    </p>

                    <div className="w-full flex justify-center gap-4">
                        <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                            href="https://github.com/chik0di/coretelecoms-data-platform"
                            target="_blank"
                            className="capitalize rounded-full text-sm"
                            >
                            Github
                            </Link>
                        </button>

                        <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                            href="https://github.com/chik0di/coretelecoms-data-platform"
                            target="_blank"
                            className="capitalize rounded-full text-sm"
                            >
                            Documentation
                            </Link>
                        </button>
                        </div>
                </div>


                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <Image className='rounded-lg mb-4' src={'/paw_hearts.png'} width={10000} height={2} alt='nadice' />

                    <div className="flex justify-between items-center">
                        <div className="top mt-2 flex items-center gap-2 hover:translate-y-1 transition duration-700 hover:-skew-x-6">
                            <FiLink2 size={22} />
                            <Link href={'https://www.linkedin.com/pulse/cry-changed-everything-maternal-care-in-africa-0ptof'} target='_blank' className="font-bold text-lg">Paw & Heart Animal Rescue Charity solution</Link>
                        </div>

                        <Link href={'https://www.linkedin.com/pulse/cry-changed-everything-maternal-care-in-africa-0ptof'} target='_blank'></Link>
                    </div>

                    <p className="text-sm mb-3 text-black">
                        Built a Power Platform solution that digitized animal shelter operations, streamlining intake, adoption tracking, and operational reporting.
                    </p>
                    
                    <p className="text-sm text-black">
                            <strong>Stack:</strong> Python, PostgreSQL, Google Sheets, Terraform, AWS SSM, Amazon S3, Snowflake, dbt, Apache Airflow, Docker, Power BI
                    </p>

                    <div className="w-full flex justify-center gap-4">
                        <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                            href="https://github.com/chik0di/coretelecoms-data-platform"
                            target="_blank"
                            className="capitalize rounded-full text-sm"
                            >
                            Github
                            </Link>
                        </button>

                        <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gradient-to-r from-[#FF9C1A] to-[#EC1B09] rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                            <Link
                            href="https://github.com/chik0di/coretelecoms-data-platform"
                            target="_blank"
                            className="capitalize rounded-full text-sm"
                            >
                            Documentation
                            </Link>
                        </button>
                        </div>
                </div>

            </div>
        </main>
    )
}

export default Work