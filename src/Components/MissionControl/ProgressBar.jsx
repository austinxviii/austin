export default function ProgressBar({ value }) {

    return (

        <div className="progress">

            <div
                className="fill"
                style={{ width: `${value}%` }}
            />

        </div>

    );

}