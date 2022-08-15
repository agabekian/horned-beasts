import React, { Component } from 'react';
import HornedBeast from './HornedBeast';

class Main extends Component {
    render() { 
        return (
        <div>
            <HornedBeast title="Unicorn" imageUrl="https://www.google.com/search?q=unicorn&tbm=isch&source=iu&ictx=1&vet=1&fir=lJIxJ-bCg0TBMM%252ClFVDSW9OK_uSqM%252C%252Fm%252F0bvpg%253BZOCgQai1pnnLbM%252CXcMasIP7hZVAHM%252C_%253BWHji4_mzSP8K1M%252CrAjh6U7zhH-GbM%252C_%253BwAKtLgP0O2JUuM%252CZvRV7J0w16t4gM%252C_%253BPQ0j9f4fD4rubM%252CX11bvhnpdJ1olM%252C_%253BHrYJFPxs1iQ86M%252CN8soEteFv9t2hM%252C_%253BfnFwAhpT-_fu1M%252CVYz2sVJJ-JAI5M%252C_&usg=AI4_-kTXMwIB7OXT4i38usbQ1hhFU8klCA&sa=X&ved=2ahUKEwjIwJjF-sn5AhVFOH0KHfCLAgQQ_B16BQiNARAB#imgrc=lJIxJ-bCg0TBMM" description="pretty unicorn"/>
            <HornedBeast title="Unicorn" imageUrl="" description="fugly beast"/>

        </div>
        );
    }
}
 
export default Main ;