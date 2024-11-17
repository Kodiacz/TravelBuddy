using System.Security.Cryptography;
using System.Text;

namespace TravelBuddy.Application
{
	public static class Helpers
	{
		public static class Encrypt
		{
			public static class Password
			{
				public static void CreateHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
				{
					using (var hmac = new HMACSHA512())
					{
						passwordSalt = hmac.Key;
						passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
					}
				}
			}
		}
	}
}
