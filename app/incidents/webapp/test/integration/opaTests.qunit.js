sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/acme/incidentmanagement/incidents/test/integration/FirstJourney',
		'com/acme/incidentmanagement/incidents/test/integration/pages/IncidentsList',
		'com/acme/incidentmanagement/incidents/test/integration/pages/IncidentsObjectPage'
    ],
    function(JourneyRunner, opaJourney, IncidentsList, IncidentsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/acme/incidentmanagement/incidents') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheIncidentsList: IncidentsList,
					onTheIncidentsObjectPage: IncidentsObjectPage
                }
            },
            opaJourney.run
        );
    }
);