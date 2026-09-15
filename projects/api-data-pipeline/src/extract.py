import json
from pathlib import Path
from urllib.request import Request, urlopen


API_URL = "https://jsonplaceholder.typicode.com/posts"

PROJECT_ROOT = Path(__file__).resolve().parents[1]
RAW_DATA_PATH = PROJECT_ROOT / "data" / "raw" / "posts.json"


def fetch_api_data() -> list[dict]:
    """Fetch post data from the public API."""
    request = Request(
        API_URL,
        headers={
            "User-Agent": "Mozilla/5.0"
        }
    )

    with urlopen(request, timeout=30) as response:
        if response.status != 200:
            raise RuntimeError(
                f"API request failed with status code {response.status}"
            )

        return json.load(response)


def save_raw_data(data: list[dict]) -> None:
    """Save the raw API response as JSON."""
    RAW_DATA_PATH.parent.mkdir(parents=True, exist_ok=True)

    with RAW_DATA_PATH.open("w", encoding="utf-8") as file:
        json.dump(data, file, indent=2)

    print(f"Raw data saved to: {RAW_DATA_PATH}")
    print(f"Records extracted: {len(data)}")


def main() -> None:
    print("Starting API extraction...")

    data = fetch_api_data()
    save_raw_data(data)

    print("API extraction completed successfully.")


if __name__ == "__main__":
    main()