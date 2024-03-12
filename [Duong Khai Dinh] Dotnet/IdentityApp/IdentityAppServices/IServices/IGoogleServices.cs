namespace IdentityApp.IServices
{
    public interface IGoogleServices
    {
        /// <summary>
        /// Verify CaptchaToken
        /// </summary>
        /// <param name="recaptchaToken"></param>
        /// <returns></returns>
        Task<bool> VerifyCaptcha(string recaptchaToken);
    }
}
