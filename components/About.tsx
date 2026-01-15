import { SiGithub } from "react-icons/si"
import { SiCredly } from "react-icons/si"
import { FaTwitter, FaLinkedinIn } from "react-icons/fa6"
import { SiMedium } from "react-icons/si"
import { FiDroplet } from 'react-icons/fi'
import { MdOutlineViewAgenda } from "react-icons/md";
import Link from "next/link";

export default function About() {
    return (
        <main className='bg-white dark:bg-slate-700 w-full h-[36rem] rounded-3xl mt-2 p-7 md:p-14 overflow-hidden overflow-y-auto lg:overflow-y-hidden hover:overflow-y-auto hover:shadow-lg duration-700'>
            <h1 className={`capitalize font-bold text-4xl flex items-center gap-3 font-luckiest`}>About Me <span className="text-6xl"></span></h1>
                <div className="mt-4 space-y-4">
                <p>
                    I design data systems the way architects design cities: with structure, intent,
                    and the expectation that they will scale long after the first brick is laid.
                    I am a Data & Analytics Engineer who lives at the intersection of raw data chaos
                    and executive-level clarity. My work spans the full lifecycle of data—from
                    extraction and orchestration to modeling, governance, and downstream analytics—
                    with a relentless focus on correctness, performance, and long-term maintainability.
                </p>

                <p>
                    I build production-grade pipelines, not tutorials. Whether it’s scraping and
                    structuring messy public data, orchestrating workflows, transforming at scale,
                    or modeling analytical warehouses, I treat data as infrastructure—not an
                    afterthought. My pipelines are observable, documented, and designed to survive
                    real-world failure modes.
                </p>

                <p>
                    Beyond implementation, I care deeply about data architecture, naming conventions,
                    schema discipline, and lineage. I’ve designed warehouses for public-sector
                    institutions, built end-to-end ETL systems from scratch, and published high-value
                    datasets used by analysts and machine learning practitioners worldwide as a
                    Kaggle Datasets Expert.
                </p>
                </div>

            <div className="icons flex gap-3 mt-3 lg:hidden">
                <Link href={'https://github.com/chik0di'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <SiGithub size={16} className='text-black'/>
                </Link>
                <Link href={'https://linkedin.com/in/chikodi-obu-278b5b264'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FaLinkedinIn size={16} className='text-sky-500' />
                </Link>
                <Link href={'https://x.com/emc0de'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <FaTwitter size={16} className='text-blue-900' />
                </Link>
                <Link href={'https://medium.com/@chikodiobu'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <SiMedium size={16} className='text-black' />
                </Link>
                <Link href={'https://www.credly.com/users/chikodi-obu/badges#credly'} target="_blank" className="bg-[#F2F7FC] dark:bg-slate-300 p-4 rounded-lg">
                    <SiCredly size={20} className='text-black' />
                </Link>
            </div>

            <button className="w-44 mt-4 flex items-center gap-2 p-3 bg-gray-500 lg:hidden rounded-full justify-center text-[#F2F5F9] text-sm hover:scale-105 hover:shadow-lg border-2 duration-700">
                <MdOutlineViewAgenda className='text-white' />
                <Link href={'https://acrobat.adobe.com/id/urn%3Aaaid%3Asc%3AEU%3Ab8932f94-f3c3-4d9b-8397-ec5cdad1a471/?filetype=application%2Fpdf'} target="_blank" className="capitalize rounded-full text-sm">View Resume</Link>
            </button>

            <hr className="my-6" />

            <h1 className="uppercase font-bold text-2xl flex items-center gap-2 my-6">What i do</h1>

            <div className="grid lg:grid-cols-2 gap-7">
                <div className="bg-[#ffff] p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Data Engineering & Pipeline Orchestration</h6>
                    </div>

                    <p className="text-sm">I design and build end-to-end data pipelines that move raw, unreliable data into clean, analytics-ready assets. From web scraping and API ingestion to batch and scheduled workflows, I use tools like Python, SQL, and Apache Airflow to create pipelines that are resilient, observable, and built for production—not demos.
                    </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Analytics Engineering & Data Modeling</h6>
                    </div>

                    <p className="text-sm">I turn data into structure. Using dbt, dimensional modeling, and warehouse-first design, I build fact and dimension models that are intuitive for analysts, performant at scale, and governed by clear contracts. My focus is always on consistency, lineage, and trust, so metrics mean the same thing everywhere they’re used.</p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Cloud Data Warehousing & Architecture</h6>
                    </div>

                    <p className="text-sm">I architect modern data platforms on Snowflake, SQL Server, and cloud-native stacks, designing schemas, layers (bronze/silver/gold), and environments that scale with the business. Every decision balances performance, cost, and future growth—because good architecture should age well.
                    </p>
                </div>

                <div className="bg-[#ffff] p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Data Quality, Testing & Observability</h6>
                    </div>

                    <p className="text-sm">I treat data quality as a first-class concern. From schema tests and freshness checks to pipeline monitoring and alerting, I build systems that fail loudly and early, ensuring stakeholders can trust the numbers before they ever reach a dashboard.</p>
                </div>

                <div className="bg-[#ffff] p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Business Intelligence & Decision Enablement</h6>
                    </div>

                    <p className="text-sm">I deliver analytics that support real decisions, not vanity metrics. By connecting clean, well-modeled data to Power BI, I enable interactive dashboards, executive reporting, and self-service analytics grounded in a single source of truth. </p>
                </div>

                <div className="bg-[#F2F7FC] dark:bg-slate-900 p-5 rounded-xl">
                    <div className="top mb-1">
                        <FiDroplet />
                        <h6 className="font-bold text-2xl">Documentation, Standards & Data Governance</h6>
                    </div>

                    <p className="text-sm">I document systems so they outlive the person who built them. From data dictionaries and lineage to naming conventions and modeling standards, I create clarity around how data is produced, defined, and used —reducing friction, rework, and institutional risk.</p>
                </div>
            </div>
        </main>
    )
}