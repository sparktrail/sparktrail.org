---
title: "The strange geography of content delivery networks"
description: "If you contract a cloud provider’s services, you don’t have to think about the location of your data at all. But someone is thinking about it."
author: Tim Maly
categories: ["cloud", "tech"]
date: 2018-01-16T22:18:41+11:00
---

One of the most important and most intoxicating features of the Internet has been the way it seems to distort and collapse space. Adherents and early adopters picked up on this quickly, eager to share the dizzying experience of the feeling that someone a continent away was closer than someone down the hall. To try to explain this appeal to the rest of the world, they deployed a variety of clunky spatial metaphors: Cyberspace. The Information Super Highway.

Today, as the Internet has moved from a place you visit (through dial-up or ethernet) to an environment you inhabit, we have tended towards more amorphous metaphors. The most powerful and clichéd of these is The Cloud.

To anyone who works with the heavy humming racks of servers that fill rooms and power modern cloud services, this metaphor must seem faintly ridiculous. But, as a mental model for customers and users, it’s been surprisingly robust. When you upload your data to the cloud, it’s not meant to matter where that data has gone. It’s just out there, available to your audience of viewers, readers, or users, as fast as their local ISP will provide it to them. This is not a controversial statement—it’s the basic selling point of a cloud offering. If you contract a cloud provider’s services, you don’t have to think about the location of your data at all. But someone is thinking about it.

In order for the rest of us to remain blissfully ignorant of the specifics about where our data lives, the companies who offer these services must have an intimate geographic knowledge. That knowledge informs where they put their Points of Presence (PoP), the deals they cut with local providers, and every other aspect of the work. I spoke with Fastly CTO Tyler McMullen and Liz Borowsky, vice president, Engineering, Platform Mapping at Akamai to learn more about how they thought about the geographic aspects of the business.

<blockquote>
If you contract a cloud provider’s services, you don’t have to think about the location of your data at all. But someone is thinking about it.
</blockquote>

Both companies are primarily CDNs (Content Delivery Networks). They take customers’ data and act as an intermediary—filtering and directing traffic while mirroring and caching content to improve response times and ensure that sites don’t go down at moments of high demand.

Both companies are global providers. Akamai is the world’s largest CDN with more than 233,000 servers in over 130 countries and within more than 1,600 networks around the world. Fastly takes a smaller approach, arguing that fewer PoPs (they run 32) allows them to create a network with unique capabilities. Akamai’s approach means that they are thinking about where to put servers with a granularity of neighbourhoods in some places, while Fastly focuses its attention on promising network cross-roads.

In either case, the basics are the same. You choose your sites according to a current or projected need that gets your customers closer to their users. Fastly CEO and founder Artur Bergman got his start in the CDN business when he carried two Wikia servers on a plane from the US to the UK. By bringing servers online across the Atlantic, the British readers’ network requests avoid a high latency trip under the waves. Simple.

As networks grow, providers look for opportunities to set up new PoPs. These are generally dictated by very straightforward geographical problems: Most of your users are in population centres and the sites where the biggest networks connected up are pretty well known. So you install a server at the intersection of the fattest pipes nearest the most users, but the strange terrain of politics and culture can shape your decisions in unexpected ways.

“One of the other ways that we attempt to locate PoPs is based on language,” says McMullen. The distance between Germany and England is relatively small, physically speaking. “However if you look at the actual content that is cached there they’re almost completely separate.”

Germans want to read and watch German things, the British want to read and watch English things. So they each get their own PoP.

“Australia is a continual problem,” says Borowsky. When dealing with high traffic, their first goal is to keep it within the network that they users are on already. When that fails, they have to peer with other nearby networks. “If you map out of Australia, you take a really big hit.” And then things get weird. The links to Asia would normally be preferred but they have narrower bandwidth than the links to the West Coast of the US, so a user requesting a small bit of data might pull it from Singapore or Malaysia, while a user requesting a large file at the same time might end up pulling it from California.

Which brings us to political problems. Sometimes, for legal reasons, precisely where your data lives is extremely important. “A lot of people want their data to be served within country,” says Borowsky. “And frankly, with the NSA and a lot of European regulations and things like that it’s getting more and more important to keep things within geography.” This demands that you bring capacity online that can handle the spikes in demand for that specific content, which is a level of care that adds a new wrinkle to network mapping.

<blockquote>
“With the NSA and a lot of European regulations … it’s getting more and more important to keep things within geography.”
</blockquote>

Time can play an important role in decisions about where to provision new servers as well. In 2010, Akamai took on streaming the World Cup. At the time, they were still building out their systems, and online streaming of video was relatively new. The company had to make some bets about where capacity would be needed.

“So you do this analysis,” says Borowsky, “OK who are the teams that are likely to get to the further rounds and when are those games being played during working hours, so that people aren’t at the pub?” Obviously, the further a team gets, the more intense local interest in their progress is likely to be. Less obviously, games after hours were more likely to have been watched on a shared TV using traditional broadcasts, but games during office hours would be streamed in a window on someone’s desktop. Those were the key moments that would test Akamai’s capabilities.

Ultimately, cloud providers are seeking to abstract for themselves the way they abstract things out for customers. Today, Akamai avoids having to make World Cup predictions by running enough capacity that even those high traffic moments are small humps in the overall graph.

Speaking with both McMullen and Borowsky, it became clear that the most charming stories around geography were linked to the early days of their respective companies. They are, in effect, artifacts of a time when the companies were closer to the edge of their ability to meet demands. Today, both companies use extensive automation to translate the health of individual servers or PoPs into broader concepts, expressed not in time and space but in metrics of data flow and capacity percentages. “There is physical reality there,” says Borowsky, “but as much as you can, you decouple the day-to-day, minute-by-minute, second-by-second operations and performance of your network from the physical reality of what’s going on underneath and the fact that sometimes you need hands and eyes to swap things you…the only way you can provide that smooth service is by acting fast enough that no one notices there was an outage here or there.”

“One way to look at it is: humans make mistakes,” says McMullen, “We want to implement software that won’t make the same mistakes that humans make.”

In order to manage their ever-growing capabilities, they too need to abstract away the geographic details for themselves, just as they are doing it for their customers. “I kind of miss that now that these big events just make this little lump instead of this huge spike,” says Borowsky. “You lose a bit of visibility into ‘ooh, stuff is happening on the Internet today.’”
