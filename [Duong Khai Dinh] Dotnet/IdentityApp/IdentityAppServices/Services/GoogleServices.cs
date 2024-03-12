using IdentityApp.IServices;
using Newtonsoft.Json;



namespace IdentityApp.Services
{
    public class GoogleServices : IGoogleServices
    {
        public async Task<bool> VerifyCaptcha( string recaptchaToken)
        {
            HttpClient client = new HttpClient();
            var values = new Dictionary<string, string>
                {
                    { "secret", "6Le_TIopAAAAAIuUO0CkWxbq6-6ttXoFI-uSjy4g" },
                    { "response",  recaptchaToken }
                };

            var content = new FormUrlEncodedContent(values);

            var response = await client.PostAsync("https://www.google.com/recaptcha/api/siteverify", content);

            var responseString = await response.Content.ReadAsStringAsync();
            // Deserialize the JSON response
            var responseObject = Newtonsoft.Json.JsonConvert.DeserializeObject<Dictionary<string, string>>(responseString);

            // Extract the specific key you are interested in
            string desiredKey = "success";
            if (responseObject.ContainsKey(desiredKey))
            {
                string desiredValue = responseObject[desiredKey];
                Console.WriteLine($"Key: {desiredKey}, Value: {desiredValue}");
                return bool.Parse(desiredValue);
            }
            else
            {
                Console.WriteLine($"Key: {desiredKey} not found in the response");
             
            }
             return false;
          
        }
    }
}
