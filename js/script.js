const sendNotification = async () => {
  
        const API_KEY = '18c99af0-703b-460f-ada7-c18e8b4d154c';
        const SERVER_KEY = '100889'
        const CAMPAIGN_ID = '1000065543';
        console.log('Enviando notificación...');
        console.log('API_KEY:', API_KEY);
        console.log('SERVER_KEY:', SERVER_KEY);
        try {
            const response = await fetch(  `https://api.indigitall.com/v1/campaign?page=0&limit=0&applicationId=${100186}` , {

                method: 'GET',
                headers: {
                    accept: 'application/json',/* 
                    'Content-Type': 'application/json', */
                    Authorization: `ServerKey ${SERVER_KEY}`
                }/*, 
                body: JSON.stringify({ 
                    name: "test Notification",
                    enabled: false,  
                 }), */
            });

            if (response.ok) {
                const data = await response.json();
                alert('Notificación enviada: ' + data.message);
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
                console.error('Error:', response);
                alert('Error al enviar la notificación: ' + errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('No se pudo enviar la notificación');
        }

}