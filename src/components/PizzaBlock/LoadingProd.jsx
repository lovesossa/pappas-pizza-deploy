import React from 'react'
import ContentLoader from "react-content-loader"

function LoadingProd() {
    return (
        <ContentLoader 
        speed={1.5}
        width={280}
        height={498}
        viewBox="0 0 280 470"
        backgroundColor="#f2f2f2"
        foregroundColor="#e3e3e3">
        <circle cx="122" cy="105" r="105" /> 
        <rect x="0" y="257" rx="6" ry="6" width="240" height="28" /> 
        <rect x="0" y="309" rx="5" ry="5" width="223" height="15" /> 
        <rect x="0" y="330" rx="5" ry="5" width="223" height="15" /> 
        <rect x="173" y="402" rx="8" ry="8" width="88" height="33" /> 
        <rect x="0" y="407" rx="5" ry="5" width="75" height="24" />
      </ContentLoader>
    );
}

export default LoadingProd
