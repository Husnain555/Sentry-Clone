import { IoIosArrowForward } from "react-icons/io";

import { FaRegCopy } from "react-icons/fa6";

import "./background.css";

export function Background() {
  return (
    <div>
      <div className="background">
        <div className={"code"}>
          <h1 className={"h1122"}>Getting started with Sentry is simple</h1>
          <p className={"p1234"}>
            We support every technology (except the ones we dont). Get started
            with just a few lines of code.
          </p>
          <select className={"slct"}>
            <option>andriod</option>
            <option>.Net</option>
            <option>Next js</option>
            <option>react</option>
            <option>astro</option>
            <option>Java Script</option>
            <option>C++</option>
          </select>
          <p className={"p12345"}>
            Just run this commmand to install and register Sentry's Astro
            integraion.
          </p>
          <div className={"clipboard"}>
            <span className={"text"}>npx @sentry/wizard@latest -i nextjs</span>
            <button className={"button123"}>
              <i>
                <FaRegCopy />
              </i>
            </button>
            <p className={"p123456"}>
              Enable Sentry Tracing by adding the below code.
            </p>

            <div className={"divo"}>
              <button className={"btn45"}>
                <i>
                  {" "}
                  <FaRegCopy />
                </i>
              </button>
              <code className={"code1"}>
                Sentry.init do |config| config.dsn = 'https://@sentry.io/' # Set
                a uniform sample rate between 0.0 and 1.0 # We recommend
                adjusting the value in production: config.traces_sample_rate =
                1.0 # or control sampling dynamically config.traces_sampler =
                lambda do |sampling_context| #
                sampling_context[:transaction_context] contains the information
                about the transaction # sampling_context[:parent_sampled]
                contains the transaction's parent's sample decision true #
                return value can be a boolean or a float between 0.0 and 1.0 end
                end
              </code>
            </div>
            <p className={"p456"}>
              That's it. Check out our{" "}
              <a className={"ank123"} href={"./."}>
                documentation
              </a>{" "}
              to ensure you have the latest instructions.
            </p>
            <div className={"btndiv"}>
              <button className={"button786"}>
                CREATE A SENTRY ACCOUNT
                <i className={"i123"}>
                  <IoIosArrowForward />
                </i>
              </button>
              <button className={"button687"}>
                SEE ALL PLATFORM
                <i className={"i123"}>
                  <IoIosArrowForward />
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
