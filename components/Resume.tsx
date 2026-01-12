import { Luckiest_Guy, Pacifico } from 'next/font/google'
import { FiPocket } from 'react-icons/fi'
const luckiest = Luckiest_Guy({ subsets: ['latin'], weight: ['400'] })
const pacifico = Pacifico({ subsets: ['latin'], weight: ['400'] })

export default function Resume() {
    return (
        <main className='bg-white dark:bg-slate-700 w-full h-[36rem] rounded-3xl mt-2 p-7 md:p-14 overflow-hidden overflow-y-auto lg:overflow-y-hidden hover:overflow-y-auto hover:shadow-lg duration-700'>
            <div className='flex gap-4 items-center'>
                <h1 className={`capitalize font-bold text-4xl flex items-center gap-3 ${luckiest.className}`}>Skills <span className="text-5xl"></span></h1>
                <hr className="w-[50rem]" />
            </div>

            <div className="grid lg:grid-cols-3 gap-5 mt-5">
                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Programming & Data Processing</h6>
                    </div>

                    <p className="text-sm mb-3">
                        I use Python (Pandas, PySpark) and SQL to process, transform, and analyze data at scale. From batch transformations to complex analytical queries, I write clear, efficient code designed for performance, readability, and reuse across pipelines.
                    </p>

                    <p className="text-sm">
                        <strong>Tools:</strong> Python, Pandas, PySpark, SQL, Shell Scripting
                    </p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Analytics & Business Intelligence</h6>
                    </div>

                    <p className="text-sm mb-3">
                        I design analytics that translate raw data into actionable insight. By modeling data for reporting and connecting it to Power BI, Tableau, and Excel, I enable interactive dashboards and self-service analytics grounded in consistent business logic.
                    </p>

                    <p className="text-sm">
                        <strong>Tools:</strong> Power BI, Tableau, Microsoft Excel
                    </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Database & Query Optimization</h6>
                    </div>

                    <p className="text-sm mb-3">
                        I work comfortably across relational databases, designing schemas, writing optimized queries, and managing data across environments. My focus is on data integrity, performance, and ensuring analytical workloads don’t compromise operational systems.
                    </p>

                    <p className="text-sm">
                        <strong>Tools:</strong> PostgreSQL, MySQL, SQL Server, Microsoft Access
                    </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Data Warehousing & Transformation</h6>
                    </div>

                    <p className="text-sm mb-3">
                        I build modern analytical warehouses with a layered approach, transforming raw data into trusted analytical models. Using dbt, I enforce version-controlled transformations, testing, and documentation to ensure consistency across teams.
                    </p>

                    <p className="text-sm">
                        <strong>Tools:</strong> Snowflake, Amazon Redshift, dbt
                    </p>
                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Orchestration & Automation</h6>
                    </div>

                    <p className="text-sm mb-3">
                        I automate data movement and transformation using orchestrators and ingestion tools designed for reliability and scale. My pipelines are monitored, repeatable, and built to handle real-world failures without manual intervention.
                    </p>

                    <p className="text-sm">
                        <strong>Tools:</strong> Apache Airflow, Airbyte
                    </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Cloud, Infrastructure & DevOps Practices</h6>
                    </div>

                    <p className="text-sm mb-3">
                        I treat data systems as infrastructure. Using containerization, version control, and infrastructure-as-code, I build reproducible environments that support collaboration, deployment, and long-term maintainability.
                    </p>

                    <p className="text-sm">
                        <strong>Tools:</strong> Docker, Linux (Ubuntu), Terraform, Git, GitHub
                    </p>
                </div>

                <div className="bg-[#F2F7FC]  dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Documentation, Governance & Best Practices</h6>
                    </div>

                    <p className="text-sm mb-3">
                        I create clear documentation, naming conventions, and standards that improve collaboration and reduce onboarding time. From data dictionaries to lineage and transformation logic, I prioritize clarity and long-term maintainability.
                    </p>

                </div>

                <div className="bg-[#FFEBD1] p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Technical Communication & Stakeholder Alignment</h6>
                    </div>

                    <p className="text-sm mb-3">
                        I translate complex data systems and metrics into clear, actionable explanations for non-technical stakeholders. By aligning engineers, analysts, and business teams early, I reduce rework and ensure data solutions solve the right problems.
                    </p>

                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1 flex items-center gap-2">
                        <FiPocket size={25} />
                        <h6 className="font-bold text-2xl">Ownership, Reliability & Delivery</h6>
                    </div>

                    <p className="text-sm mb-3">
                        I take end-to-end ownership of data systems, from design through deployment and maintenance. I prioritize reliability, accountability, and on-time delivery, treating data infrastructure as a critical business asset.
                    </p>

                </div>


            </div>
        </main>
    )
}