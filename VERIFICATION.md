# SAYWARD v6.4.13 UI verification

- Sentence level badge appears immediately **left of Favorite** in the card header.
- Level is taken from `chosen.level` (currently displayed source/example), not `pattern_level`.
- L1 gray / L2 blue / L3 purple / L4 orange / unknown L? gray.
- Existing Favorite button DOM node and its event listener are preserved; wrapper repositions it only inside a Chunk card.
- Header group wraps safely if width is insufficient; no overlay on infinity pill.
- Pattern level and pending notice remain in secondary info row.
- Level changes with original/adaptive/next variation; no DB writes made for positioning.
- `MV_APP_VERSION`, title, version badges and `sw649VersionSync` are updated to v6.4.13.
- Existing authentication, RPC contracts, grading and reservation rules remain unchanged.
