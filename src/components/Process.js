import React from 'react';

const ProcessCard = (props) => {
    const { title, desc, num } = props;
    return (
        // <div className="bg-indigo-200 bg-opacity-80 rounded-2xl p-5 text-left hover:bg-opacity-100 transition duration-500 ease select-none">
        //     <p className="font-mitr text-xl text-indigo-500">{title}</p>
        //     <p>{desc}</p>
        // </div>
        <li class="relative mb-6 sm:mb-0 list-none">
            <div class="flex items-center">
                <div class="flex z-10 justify-center items-center w-8 h-8 bg-indigo-800 rounded-full shrink-0 bg-opacity-100 hover:bg-opacity-50">
                    <h3 class='text-white'>{num}</h3>
                </div>
                <div class="sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-3 lg:pr-8">
                <h3 class="text-xl font-semibold text-white">{title}</h3>
                <p class="text-indigo-100">{desc}</p>
            </div>
        </li>
    );
};

const Process = () => {
    return (
        <section className="py-20 px-10 bg-indigo-500 ">
            <h2>
                <p className="font-medium text-5xl text-white text-center">Security ใน DevSecOps</p>
                <p className="mt-2 text-3xl text-indigo-800 text-center mb-7">ประกอบไปด้วย 5 ขั้นตอน</p>
            </h2>
            {/* <img className="w-fit max-w-xl mx-auto hover:scale-105 transition duration-500 ease select-none mb-7" src="/assets/process.png" alt='test' /> */}
            <div className="mx-auto max-w-screen-lg lg:flex lg:justify-center">
                <div className="sm:col-span-2 grid lg:grid-cols-5 sm:grid-cols-1 gap-3">
                    <ProcessCard
                        title='Threat Modeling'
                        desc='สร้างแบบจำลองภัย (threat) ที่จะเกิดขึ้น และสถานการณ์
                            การโจมตี (attack)'
                        num='1'
                    />
                    <ProcessCard
                        title='Security Scanning and Testing'
                        desc='หาหรือตรวจจับ
                            ช่องโหว่ (vulnerability) ของโค้ดด้วยเครื่องมือ SAST (Static Application Security Testing) DAST (Dynamic Application Security Testing) หรือ SCA (Software Composition Analysis) แบบอัตโนมัติ
                            '
                        num='2'
                    />
                    <ProcessCard
                        title='Security Analysis'
                        desc='วิเคราะห์และจัดลำดับความสำคัญของช่องโหว่ที่พบและหาทางแก้ไข'
                        num='3'
                    />
                    <ProcessCard
                        title='Remediation'
                        desc='จัดการแก้ไขช่องโหว่โดยคำนึงถึงความสำคัญ เพื่อให้กระทบการส่งมอมซอฟต์แวร์น้อยที่สุด'
                        num='4'
                    />
                    <ProcessCard
                        title='Monitoring'
                        desc='สังเกตการณ์การทำงานซอฟต์แวร์ที่ส่งมอบไป เนื่องจากอาจจะค้นพบภัย 
                            การกำหนดค่าที่ไม่ถูกต้อง (misconfiguration) และปัญหาด้านความมั่นคงปลอดภัยอื่น ๆ
                            '
                        num='5'
                    />
                </div>
            </div>
        </section>
    );
};

export default Process;