
using Azure.Storage.Blobs.Models;
using Azure.Storage.Blobs;

namespace TravelBuddy.Infrastructure.Services
{
	public class BlobStorageService : IBlobStorageService
	{
		private readonly BlobServiceClient _blobServiceClient;
		private readonly string _containerName = "images";  // You can load this from config

		public BlobStorageService(BlobServiceClient blobServiceClient)
		{
			_blobServiceClient = blobServiceClient;
		}

		public async Task<string> UploadAsync(string blobName, Stream content)
		{
			var blobContainerClient = _blobServiceClient.GetBlobContainerClient(_containerName);
			var blobClient = blobContainerClient.GetBlobClient(blobName);
			await blobClient.UploadAsync(content, true);  // true to overwrite if exists
			return blobClient.Uri.ToString();
		}

		public async Task<Stream> DownloadAsync(string blobName)
		{
			var blobContainerClient = _blobServiceClient.GetBlobContainerClient(_containerName);
			var blobClient = blobContainerClient.GetBlobClient(blobName);
			BlobDownloadInfo download = await blobClient.DownloadAsync();
			return download.Content;
		}

		public async Task DeleteAsync(string blobName)
		{
			var blobContainerClient = _blobServiceClient.GetBlobContainerClient(_containerName);
			var blobClient = blobContainerClient.GetBlobClient(blobName);
			await blobClient.DeleteIfExistsAsync();
		}
	}
}
