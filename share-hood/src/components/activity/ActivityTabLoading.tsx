import {Tabs, TabsContent, TabsList, TabsTrigger} from "@components/shad.ui/tabs";
import ItemCardLongLoading from "@components/skeleton/ItemCardLongLoading";

export default function ActivityTabLoading() {
  return Array.from({length: 1}).map((_, index) => (
    <Tabs defaultValue="on-going" className="w-full" key={index}>
      <TabsList className="grid w-full grid-cols-3 bg-transparent">
        <TabsTrigger value="on-going" className="w-full">
          On Going
        </TabsTrigger>
        <TabsTrigger value="rented" className="w-full">
          Rented
        </TabsTrigger>
        <TabsTrigger value="complete" className="w-full">
          Complete
        </TabsTrigger>
      </TabsList>

      <TabsContent value="on-going" className="w-full">
        <ItemCardLongLoading key={index} />
      </TabsContent>
      <TabsContent value="rented" className="w-full">
        <ItemCardLongLoading key={index} />
      </TabsContent>
      <TabsContent value="complete" className="w-full">
        <ItemCardLongLoading key={index} />
      </TabsContent>
    </Tabs>
  ));
}
