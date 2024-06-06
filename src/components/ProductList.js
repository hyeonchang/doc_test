import React from 'react';
import styles from './ProductList.module.css';

const products = [
    {
        name: "Q-Face Pro",
        description: "Q-Face Pro is a high-performance on-device AI facial recognition module designed for embedded devices. It ensures enhanced data privacy and security by processing data locally. Versatile in application, it is ideal for access control, user authentication, and smart devices."
    },
    {
        name: "Q-Face Engine",
        description: "Q-Face Engine provides a robust AI-based facial recognition algorithm with an SDK and web service API for native app development. Compatible with multiple operating systems, it offers high accuracy and speed for security, identity verification, and user interaction enhancements."
    },
    {
        name: "Q-Vision Engine",
        description: "Q-Vision Engine delivers advanced AI-based video analytics, including anti-tailgating and intrusion detection. It comes with an SDK and web service API for native application development, supporting various operating systems. Ideal for enhancing security and operational efficiency."
    },
    {
        name: "Nx Plugins",
        description: "Nx Plugins integrate the features of Q-Face Engine and Q-Vision Engine into Network Optix's VMS, Nx Witness. This integration adds real-time facial recognition and advanced video analytics, enhancing the capabilities of Nx Witness for comprehensive security and surveillance applications."
    }
];

function ProductList() {
    return (
        <div className={styles.products}>
            {products.map((product, index) => (
                <div key={index} className={styles.product}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
