import SideServiceController from "../../../controllers/side_service_controller";

export default class Description extends SideServiceController {
    render() {
        return (
            <>
                <span>Touba Side services:</span>
                <p className="mt-4">
                    Touba intends to provide side services related to user needs over
                    time. Tuba has several goals in providing these services:
                </p>
                <ul>
                    <li>
                        Meet the needs of users collectively and in the form of a
                        package
                    </li>
                    <li>
                        Collecting direct data of the type and amount of users’ needs
                        and using it in order to further improve the situation of users
                    </li>
                    <li>
                        Remove administrative barriers for traditional users or small
                        businesses
                    </li>
                    <li>
                        Create a sense of confidence and avoid fear due to the
                        elimination of useless traders and the existence of direct
                        communication in the market
                    </li>
                    <li>
                        Provide suggestions in specialized areas in order to provide
                        opportunities for user development
                    </li>
                    <li>
                        Direct cooperation with experts in various fields in order to
                        timely identify users’ problems and provide efficient and
                        effective solutions Side services are provided in different ways
                        in different time periods. At the beginning of the Touba launch,
                        some of these services are provided completely free of charge.
                        Then some side services are offered in the form of membership
                        packages and others are sold separately.
                    </li>
                </ul>
                <p>Some of the most important side services are as follows:</p>
            </>
        )
    }
}
