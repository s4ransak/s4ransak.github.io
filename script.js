const universeId = "7375589646"; // Universe ID ของคุณ

        async function fetchRobloxStats() {
            const url = `https://games.roblox.com/v1/games?universeIds=${universeId}`;
            try {
                const response = await fetch(url);
                const data = await response.json();
                const game = data.data[0];

                document.getElementById("playing").innerText = `Active Players: ${game.playing.toLocaleString()}`;
                document.getElementById("favorites").innerText = `Favorites: ${game.favorites.toLocaleString()}`;
                document.getElementById("visits").innerText = `Visits: ${game.visits.toLocaleString()}`;
            } catch (error) {
                console.error("Error fetching game data:", error);
            }
        }

        fetchRobloxStats();
