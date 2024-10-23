namespace TravelBuddy.Application.Interfaces.Services
{
	public interface IBlobStorageService
	{
		Task<string> UploadAsync(string blobName, Stream content);
		Task<Stream> DownloadAsync(string blobName);
		Task DeleteAsync(string blobName);
	}
}
